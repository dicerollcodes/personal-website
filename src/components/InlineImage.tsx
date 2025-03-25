import React from 'react';

// Use direct local paths - these work both locally and when deployed with Next.js
interface InlineImageProps {
  imageName: "album-collage" | "pc-build";
  alt: string;
  className?: string;
}

export default function InlineImage({ imageName, alt, className = "" }: InlineImageProps) {
  // Simply use the paths directly from the public folder
  const src = imageName === "album-collage" 
    ? "/album-collage.png" 
    : "/pc-build.jpg";
  
  return (
    <img 
      src={src}
      alt={alt} 
      className={className} 
    />
  );
} 