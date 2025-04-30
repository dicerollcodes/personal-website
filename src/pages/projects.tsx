import Layout from '@/components/Layout';
import FadeIn from '@/components/FadeIn';
import { useEffect, useState } from 'react';

interface CurrentProject {
  title: string;
  description: string;
  link: string;
  progress: number;
  techStack: string[];
}

export default function Projects() {
  const [showContent, setShowContent] = useState(false);
  const [currentProject, setCurrentProject] = useState<CurrentProject | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);
    
    // Fetch current project data
    const fetchCurrentProject = async () => {
      try {
        const response = await fetch('/api/current-project');
        if (response.ok) {
          const data = await response.json();
          setCurrentProject(data);
        }
      } catch (error) {
        console.error('Error fetching current project:', error);
      }
    };
    
    fetchCurrentProject();
    
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
      tech: "React, TypeScript, Express.js, TailwindCSS",
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
      
      {currentProject && (
        <FadeIn delay={150}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Currently Working On</h2>
            <div className="bg-[#1E1E1E] p-6 rounded-lg border border-[#333333] hover:border-green-500/50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">{currentProject.title}</h3>
                <div className="bg-gray-800 rounded-full px-3 py-1">
                  <span className="text-xs text-green-400">{currentProject.progress}% complete</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{currentProject.description}</p>
              <p className="text-green-400 mb-4 text-sm">{currentProject.techStack.join(', ')}</p>
              {currentProject.link && (
                <a 
                  href={currentProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      )}
      
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