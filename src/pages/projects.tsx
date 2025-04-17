import Layout from '@/components/Layout';
import FadeIn from '@/components/FadeIn';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
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
      <FadeIn delay={100}>
        <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      </FadeIn>
      
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={200 + (index * 100)}>
            <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333] h-full hover:border-green-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-green-400 mb-4 text-sm">{project.tech}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-1">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Layout>
  );
} 