'use client';

import React, { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
  rotation: number;
}

const FallingLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Create initial leaves
    const initialLeaves = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      animationDuration: 0, // Random duration between 5-10s
      delay: 0, // more leavse 
      size: 15 + Math.random() * 10, // Random size between 15-25px
      rotation: Math.random() * 360, // Random initial rotation
    }));

    setLeaves(initialLeaves);

    // Recreate leaves periodically
    const interval = setInterval(() => {
      setLeaves(prevLeaves => {
        const newLeaves = [...prevLeaves];
        const leafIndex = Math.floor(Math.random() * newLeaves.length);
        newLeaves[leafIndex] = {
          ...newLeaves[leafIndex],
          left: Math.random() * 100,
          animationDuration: 5 + Math.random() * 5,
          delay: 0,
          rotation: Math.random() * 360,
        };
        return newLeaves;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {leaves.map((leaf) => (
        <div
          key={`${leaf.id}-${leaf.left}`}
          className="absolute top-0 transform"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            animation: `falling ${leaf.animationDuration}s linear ${leaf.delay}s infinite`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-green-500/30"
            fill="currentColor"
          >
            <path d="M17.75,9.35C17.82,9.53 18,9.62 18.18,9.55C19.64,9.06 20.75,7.66 20.75,6C20.75,4.34 19.64,2.94 18.18,2.45C18,2.38 17.82,2.47 17.75,2.65L17.65,3C17.58,3.17 17.66,3.35 17.83,3.42C18.93,3.82 19.75,4.82 19.75,6C19.75,7.18 18.93,8.18 17.83,8.58C17.66,8.65 17.58,8.83 17.65,9L17.75,9.35M21.82,13.55C21.89,13.72 22.08,13.82 22.25,13.74C23.71,13.25 24.82,11.85 24.82,10.19C24.82,8.53 23.71,7.13 22.25,6.64C22.08,6.57 21.89,6.67 21.82,6.84L21.72,7.19C21.66,7.36 21.74,7.54 21.91,7.61C23,8 23.82,9 23.82,10.19C23.82,11.38 23,12.38 21.91,12.77C21.74,12.84 21.66,13 21.72,13.19L21.82,13.55M6,18C6,19.66 7.34,21 9,21C9,19.34 7.66,18 6,18M16,21C17.66,21 19,19.66 19,18C17.34,18 16,19.34 16,21M6,13C6,14.66 7.34,16 9,16C9,14.34 7.66,13 6,13M16,16C17.66,16 19,14.66 19,13C17.34,13 16,14.34 16,16M11,21C12.66,21 14,19.66 14,18C12.34,18 11,19.34 11,21M11,16C12.66,16 14,14.66 14,13C12.34,13 11,14.34 11,16M11,11C12.66,11 14,9.66 14,8C12.34,8 11,9.34 11,11M6,8C6,9.66 7.34,11 9,11C9,9.34 7.66,8 6,8M16,11C17.66,11 19,9.66 19,8C17.34,8 16,9.34 16,11M11,6C12.66,6 14,4.66 14,3C12.34,3 11,4.34 11,6M6,3C6,4.66 7.34,6 9,6C9,4.34 7.66,3 6,3M16,6C17.66,6 19,4.66 19,3C17.34,3 16,4.34 16,6Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves; 