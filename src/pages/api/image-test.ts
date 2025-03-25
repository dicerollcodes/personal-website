import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get all image files in the public/images directory
  const imagesDirectory = path.join(process.cwd(), 'public', 'images');
  
  try {
    const imageFiles = fs.readdirSync(imagesDirectory);
    
    return res.status(200).json({ 
      images: imageFiles,
      cwd: process.cwd(),
      imagesDirectory,
      exists: fs.existsSync(imagesDirectory)
    });
  } catch (error) {
    console.error('Error reading image directory:', error);
    return res.status(500).json({ 
      error: 'Failed to read image directory',
      message: error instanceof Error ? error.message : String(error),
      cwd: process.cwd(),
      imagesDirectory
    });
  }
} 