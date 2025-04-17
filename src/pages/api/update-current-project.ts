import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface WorkingOnProject {
  title: string;
  description: string;
  link?: string;
  progress?: number;
  techStack?: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const projectData: WorkingOnProject = req.body;
    
    // Basic validation
    if (!projectData.title || !projectData.description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    // Sanitize and validate the project data
    const sanitizedData: WorkingOnProject = {
      title: projectData.title.trim(),
      description: projectData.description.trim(),
      link: projectData.link?.trim() || undefined,
      progress: typeof projectData.progress === 'number' ? 
        Math.min(100, Math.max(0, projectData.progress)) : undefined,
      techStack: projectData.techStack?.filter(tech => tech.trim() !== '') || []
    };

    // Get the path to the JSON file
    const filePath = path.join(process.cwd(), 'public', 'data', 'current-project.json');
    
    // Write the updated data to the file
    fs.writeFileSync(filePath, JSON.stringify(sanitizedData, null, 2));
    
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating project data:', error);
    return res.status(500).json({ error: 'Failed to update project data' });
  }
} 