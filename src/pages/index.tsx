import Layout from '@/components/Layout';
import NowPlaying from '@/components/NowPlaying';

export default function Home() {
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
            <div className="relative w-full md:w-48 rounded-lg overflow-hidden">
              <img 
                src="/images/collage.png"
                alt="Collage of my favorite albums"
                width="200"
                height="200"
                style={{width: '100%', height: 'auto', display: 'block'}}
              />
            </div>
            
            {/* Spotify Widget */}
            <div className="w-full md:flex-grow">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Currently Playing</h3>
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 