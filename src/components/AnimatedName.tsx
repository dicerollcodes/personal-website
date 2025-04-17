import { useEffect, useState } from 'react';

interface AnimatedNameProps {
  name: string;
  delay?: number;
  letterDelay?: number;
  className?: string;
}

export default function AnimatedName({ 
  name, 
  delay = 100, 
  letterDelay = 80, 
  className = "" 
}: AnimatedNameProps) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    // Initial delay before animation starts
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    
    return () => clearTimeout(startTimer);
  }, [delay]);
  
  useEffect(() => {
    if (!hasStarted) return;
    
    // Animate letters sequentially
    if (visibleChars < name.length) {
      const timer = setTimeout(() => {
        setVisibleChars(prev => prev + 1);
      }, letterDelay);
      
      return () => clearTimeout(timer);
    }
  }, [visibleChars, name.length, letterDelay, hasStarted]);
  
  return (
    <h1 className={`text-4xl md:text-5xl font-bold leading-tight text-white ${className}`}>
      {name.split('').map((char, index) => {
        const isVisible = visibleChars > index;
        
        return (
          <span 
            key={index}
            className={`
              inline-block transition-all duration-300 transform
              ${isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'}
              ${char === ' ' ? 'mr-2' : ''}
            `}
            style={{ 
              transitionDelay: `${index * 40}ms`,
            }}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );
} 