import Layout from '@/components/Layout';
import NowPlaying from '@/components/NowPlaying';
import CurrentlyWorking from '@/components/CurrentlyWorking';
import AnimatedName from '@/components/AnimatedName';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Delay showing the content sections for a staggered animation effect
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Reduced delay for a snappier feel
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Layout>
      <div className="w-full">
        {/* Top Section - Name/Bio and Spotify */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-8">
          {/* Left Column - Name and Description */}
          <div className="md:col-span-7">
            <AnimatedName name="Hello, I'm Justin!" className="mb-4" />
            
            <p className={`
              text-base text-gray-400 transform transition-all duration-700
              ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `} style={{ transitionDelay: '200ms' }}>
              I'm Justin Bustamante, an aspiring software engineer major in computer science and math at Rutgers University-New Brunswick. 
              I love building computers, playing video games (currently addicted to Overwatch 2 & Valorant but learning how to play Tekken 8), 
              and listening to music. My current favorite artists are The Marias, beabadoobee, and LE SSERAFIM.
            </p>
          </div>
          
          {/* Right Column - Spotify Widget */}
          <div className="md:col-span-5 flex items-center">
            <div className={`
              transform transition-all duration-500 w-full
              ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `} style={{ transitionDelay: '200ms' }}>
              <NowPlaying />
            </div>
          </div>
        </div>
        
        {/* Currently Working Section */}
        <div className={`
          transform transition-all duration-500 w-full
          ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
        `} style={{ transitionDelay: '300ms' }}>
          <h2 className="text-lg font-medium text-green-400 mb-4">Currently Working On</h2>
          <CurrentlyWorking />
        </div>
      </div>
    </Layout>
  );
} 