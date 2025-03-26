import React from 'react';

// Use direct local paths - these work both locally and when deployed with Next.js
interface InlineImageProps {
  imageName: "album-collage" | "pc-build";
  alt: string;
  className?: string;
}

export default function InlineImage({ imageName, alt, className = "" }: InlineImageProps) {
  // Use the images from the public/images directory
  const src = imageName === "album-collage" 
    ? "/images/album-collage.png" 
    : "/images/pc-build.jpg";
  
  return (
    <img 
      src={src}
      alt={alt} 
      className={className} 
    />
  );
} 