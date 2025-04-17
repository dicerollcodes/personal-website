import { useState, useEffect, FormEvent } from 'react';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

interface WorkingOnProject {
  title: string;
  description: string;
  link?: string;
  progress?: number;
  techStack?: string[];
}

export default function EditCurrentProject() {
  const [project, setProject] = useState<WorkingOnProject>({
    title: '',
    description: '',
    link: '',
    progress: 0,
    techStack: []
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [techInput, setTechInput] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

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
        setError('Failed to load project data');
      } finally {
        setLoading(false);
      }
    }
    
    fetchProjectData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'progress') {
      setProject({
        ...project,
        [name]: Math.min(100, Math.max(0, parseInt(value) || 0))
      });
    } else {
      setProject({
        ...project,
        [name]: value
      });
    }
  };

  const addTechStack = () => {
    if (techInput.trim() && !project.techStack?.includes(techInput.trim())) {
      setProject({
        ...project,
        techStack: [...(project.techStack || []), techInput.trim()]
      });
      setTechInput('');
    }
  };

  const removeTech = (tech: string) => {
    setProject({
      ...project,
      techStack: project.techStack?.filter(t => t !== tech)
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch('/api/update-current-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save project data');
      }
      
      setSuccess('Project updated successfully!');
    } catch (error) {
      console.error('Error saving project data:', error);
      setError('Failed to save project data. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto mt-8 px-4">
          <div className="bg-[#1E1E1E] rounded-lg p-6 animate-pulse">
            <div className="h-8 bg-[#333] rounded w-1/3 mb-6"></div>
            <div className="h-6 bg-[#333] rounded w-full mb-4"></div>
            <div className="h-6 bg-[#333] rounded w-5/6 mb-4"></div>
            <div className="h-6 bg-[#333] rounded w-2/3"></div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Edit Current Project</h1>
        
        {error && (
          <div className="bg-red-900/30 border border-red-800 text-red-300 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-900/30 border border-green-800 text-green-300 px-4 py-3 rounded mb-6">
            {success}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-[#1E1E1E] rounded-lg p-6 border border-[#333333]">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-300 mb-2">Project Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={project.title}
              onChange={handleInputChange}
              className="w-full bg-[#2A2A2A] border border-[#444] rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-300 mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={project.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-[#2A2A2A] border border-[#444] rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="link" className="block text-gray-300 mb-2">Project Link (optional)</label>
            <input
              type="url"
              id="link"
              name="link"
              value={project.link || ''}
              onChange={handleInputChange}
              className="w-full bg-[#2A2A2A] border border-[#444] rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="progress" className="block text-gray-300 mb-2">
              Progress: {project.progress}%
            </label>
            <input
              type="range"
              id="progress"
              name="progress"
              min="0"
              max="100"
              value={project.progress || 0}
              onChange={handleInputChange}
              className="w-full accent-blue-500"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Tech Stack</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                className="flex-grow bg-[#2A2A2A] border border-[#444] rounded-md px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Add a technology..."
              />
              <button
                type="button"
                onClick={addTechStack}
                className="bg-[#444] hover:bg-[#555] px-4 py-2 rounded-md text-white transition-colors"
              >
                Add
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack?.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-1 px-3 py-1 bg-[#2A2A2A] rounded-md text-sm text-gray-300"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTech(tech)}
                    className="text-gray-400 hover:text-red-400 ml-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 bg-[#333] hover:bg-[#444] text-white rounded-md transition-colors"
              onClick={() => router.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
} 