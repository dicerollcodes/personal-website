import Layout from '@/components/Layout';
import NowPlaying from '@/components/NowPlaying';
import Image from 'next/image';
import albumCollage from '../../public/images/album-collage.png';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-3xl">
        <h1 className="text-6xl font-bold mb-6">Hello, I'm Justin!</h1>
        <p className="text-xl text-gray-400 mb-8">
          I'm Justin Bustamante, an aspiring software engineer planning to major in computer science and math. I love building computers, playing video games (currently obsessed with Marvel Rivals), and blasting music whenever I can. My favorite artists are Travis Scott, beabadoobee, and Daniel Caesar.
        </p>
        
        {/* Music Section */}
        <div className="mt-12">
          <h2 className="text-lg font-medium text-gray-400 mb-6">Favorite Albums</h2>
          <div className="flex items-center gap-8">
            {/* Album Collage */}
            <div className="relative w-48 h-48 rounded-lg overflow-hidden">
              <img
                src="/images/album-collage.png"
                alt="Favorite Albums Collage"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Spotify Widget */}
            <div className="flex-grow">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Currently Playing</h3>
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 