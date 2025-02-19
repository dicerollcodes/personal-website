import Layout from '@/components/Layout';

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Audible Future Leaders",
      location: "Newark, NJ",
      date: "Sept. 2024 - Present",
      points: [
        "Designed and built front-end logic through code analysis and optimization, increasing stability by 20%",
        "Developed 10+ interactive features that enhanced engagement and streamlined navigation",
        "Collaborated with cross-functional teams to deploy 5+ features, shortening release cycles"
      ]
    },
    {
      title: "Lead Programmer",
      company: "Team 752-714 , Newark Board of Education",
      location: "Newark, NJ",
      date: "Nov. 2022 - Present",
      points: [
        "Directed 3 programming teams (in Java and Python) to integrate advanced robotics controls",
        "Mentored team members on both practices and debugging, adding success in 15 matches",
        "Streamlined workflows to secure a 7th place finish at Mount Olive 2023 and advance to Regionals in 2024"
      ]
    },
    // Add other experiences...
  ];

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#282828] p-6 rounded-lg hover:ring-2 hover:ring-green-500 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-green-400">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">{exp.location}</p>
                <p className="text-gray-400">{exp.date}</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
} 