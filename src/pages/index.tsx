import Layout from '@/components/Layout';
import NowPlaying from '@/components/NowPlaying';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [imageTest, setImageTest] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImageTest() {
      try {
        const response = await fetch('/api/image-test');
        const data = await response.json();
        setImageTest(data);
      } catch (error) {
        console.error('Failed to fetch image test:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchImageTest();
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Hello, I'm Justin!</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          I'm Justin Bustamante, an aspiring software engineer planning to major in computer science and math. I love building computers, playing video games (currently obsessed with Marvel Rivals), and blasting music whenever I can. My favorite artists are Travis Scott, beabadoobee, and Daniel Caesar.
        </p>
        
        {/* Music Section */}
        <div className="mt-8 md:mt-12">
          <h2 className="text-lg font-medium text-gray-400 mb-6">Favorite Albums</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Album Collage */}
            <div className="relative w-full md:w-48 aspect-square md:h-48 rounded-lg overflow-hidden">
              <img
                src="/album-collage.png"
                alt="Favorite Albums Collage"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Spotify Widget */}
            <div className="w-full md:flex-grow">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Currently Playing</h3>
              <NowPlaying />
            </div>
          </div>
        </div>

        {/* Debug Section */}
        <div className="mt-12 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Debug Image Paths</h2>
          <div>
            <p className="mb-2">Testing direct image paths:</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-1">Standard path:</p>
                <img src="/vercel.svg" alt="Vercel Logo Test" className="h-8 w-auto" />
              </div>
              <div>
                <p className="text-sm mb-1">Images folder path:</p>
                <img src="/images/album-collage.png?v=1" alt="Album Test" className="h-8 w-auto" />
              </div>
              <div>
                <p className="text-sm mb-1">Img folder path:</p>
                <img src="/img/album-collage.png?v=2" alt="Album Test 2" className="h-8 w-auto" />
              </div>
              <div>
                <p className="text-sm mb-1">Root path:</p>
                <img src="/album-collage.png?v=3" alt="Album Test 3" className="h-8 w-auto" />
              </div>
              <div>
                <p className="text-sm mb-1">Absolute paths:</p>
                <img src="https://picsum.photos/200/300" alt="Random image" className="h-8 w-auto" />
              </div>
            </div>
          </div>
          
          {/* API Response */}
          <div className="mt-4">
            <h3 className="text-md font-medium mb-2">API Response:</h3>
            {loading ? (
              <p>Loading image information...</p>
            ) : (
              <pre className="bg-black p-2 rounded text-xs overflow-auto">
                {JSON.stringify(imageTest, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 