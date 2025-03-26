import Layout from '@/components/Layout';

export default function Projects() {
  const projects = [
    {
      title: "Robotics Assistant",
      tech: "Python, HTML, Flask, Flask-Session, OpenAI API, pdf2image, Pillow (PIL)",
      points: [
        "Designed an AI assistant that improved team communication and boosted collaboration by 25%",
        "Integrated features that attracted 10+ new members"
      ]
    },
    {
      title: "Personal Portfolio Website",
      tech: "React, Next.js, TailwindCSS",
      points: [
        "Developed a responsive portfolio website that enhanced user experience and attracted 500+ visitors",
      ]
    },
    {
      title: "FRC Team 714 Scouting Application",
      tech: "React, TypeScript, Express.js, MongoDB, TailwindCSS",
      points: [
        "Developed a full-stack scouting application for FIRST Robotics Competition that tracked 100+ teams throughout the 2025 season",
        "Improved match planning by 25% with comprehensive team data and performance analytics"
      ]
    }
  ];

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#282828] p-6 rounded-lg hover:ring-2 hover:ring-green-500 transition-all">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-green-400 mb-4">{project.tech}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
} 