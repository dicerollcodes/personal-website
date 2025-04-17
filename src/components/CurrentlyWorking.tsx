import { useState, useEffect } from 'react';

interface WorkingOnProject {
  title: string;
  description: string;
  link?: string;
  progress?: number; // 0-100
  techStack?: string[];
}

export default function CurrentlyWorking() {
  const [project, setProject] = useState<WorkingOnProject | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchProjectData() {
      try {
        const response = await fetch('/data/current-project.json');
        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProjectData();
  }, []);
  
  if (loading) {
    return (
      <div className="bg-[#1E1E1E] rounded-lg p-6 border border-[#333333] animate-pulse">
        <div className="h-6 bg-[#333] rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-[#333] rounded w-full mb-3"></div>
        <div className="h-4 bg-[#333] rounded w-5/6"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="bg-[#1E1E1E] rounded-lg p-6 border border-[#333333]">
        <p className="text-gray-400">No project data available</p>
      </div>
    );
  }
  
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] border border-[#333333]">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <div className="rounded-full bg-green-900/30 border border-green-800 px-3 py-1 text-xs font-medium text-green-400">
            In Progress
          </div>
        </div>
        
        <p className="text-gray-400">{project.description}</p>
        
        {project.progress !== undefined && (
          <div className="w-full">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Progress</span>
              <span className="text-green-400">{project.progress}%</span>
            </div>
            <div className="w-full bg-[#333333] rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-green-600 to-green-400 h-2.5 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}
        
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-[#2A2A2A] rounded-md text-xs text-green-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1 mt-2"
          >
            View project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
} 