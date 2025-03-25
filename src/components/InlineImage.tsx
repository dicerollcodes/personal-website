import React from 'react';

// The album-collage.png image embedded as a base64 data URL
const ALBUM_COLLAGE_DATA_URL = "https://i.imgur.com/KSvbRUr.png"; 

// The pc-build.jpg image (we'll use an external URL because the file is large)
const PC_BUILD_DATA_URL = "https://i.imgur.com/Bhrm9Mh.jpg";

interface InlineImageProps {
  imageName: "album-collage" | "pc-build";
  alt: string;
  className?: string;
}

export default function InlineImage({ imageName, alt, className = "" }: InlineImageProps) {
  // Choose the appropriate data URL based on the image name
  const src = imageName === "album-collage" ? ALBUM_COLLAGE_DATA_URL : PC_BUILD_DATA_URL;
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
    />
  );
} 