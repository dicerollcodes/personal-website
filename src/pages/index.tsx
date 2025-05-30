import Layout from '@/components/Layout';
import NowPlaying from '@/components/NowPlaying';
import CurrentlyWorking from '@/components/CurrentlyWorking';
import AnimatedName from '@/components/AnimatedName';
import ACLeaves from '@/components/ACLeaves';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Delay showing the content sections until after name animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 850); // Set to start right after name animation finishes
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Layout>
      <ACLeaves />
      <div className="w-full">
        {/* Top Section - Name/Bio and Spotify */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-8">
          {/* Left Column - Name and Description */}
          <div className="md:col-span-7">
            <AnimatedName name="Hello, I'm Justin!" className="mb-4" />
            
            <p className={`
              text-base text-gray-400 transform transition-all duration-300
              ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `} style={{ transitionDelay: '0ms' }}>
              I'm Justin Bustamante, an aspiring software engineer and a student majoring in computer science and math at Rutgers University-New Brunswick. 
              I love building computers, playing video games (currently addicted to Overwatch 2 & Valorant but learning how to play Tekken 8), 
              and listening to music. My current favorite artists are The Marias, beabadoobee, and LE&nbsp;SSERAFIM.
            </p>
          </div>
          
          {/* Right Column - Spotify Widget */}
          <div className="md:col-span-5 flex items-center">
            <div className={`
              transform transition-all duration-300 w-full pl-4 md:pl-8
              ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `} style={{ transitionDelay: '50ms' }}>
              <NowPlaying />
            </div>
          </div>
        </div>
        
        {/* Currently Working Section */}
        <div className={`
          transform transition-all duration-300 w-full
          ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `} style={{ transitionDelay: '100ms' }}>
          <h2 className="text-lg font-medium text-green-400 mb-4">Currently Working On</h2>
          <CurrentlyWorking />
        </div>
      </div>
    </Layout>
  );
} 