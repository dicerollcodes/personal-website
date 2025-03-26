import Layout from '@/components/Layout';
import NowPlaying from '@/components/NowPlaying';
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
            <div className="relative w-full md:w-48 rounded-lg overflow-hidden border-2 border-gray-700">
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

        {/* Debug Section */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg">
          <h2 className="text-lg font-medium mb-6 text-white">Debug Image Paths</h2>
          
          <div className="mb-8">
            <h3 className="text-md font-medium mb-4 text-white">Simple Image Tests:</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-white mb-2">Vercel SVG:</p>
                <img 
                  src="/vercel.svg" 
                  alt="Vercel Logo"
                  width="100" 
                  height="100"
                  style={{border: '2px solid white', background: 'white'}}
                />
              </div>
              
              <div>
                <p className="text-white mb-2">Collage PNG:</p>
                <img 
                  src="/images/collage.png" 
                  alt="Album Collage"
                  width="100" 
                  height="100"
                  style={{border: '2px solid white'}}
                />
              </div>
              
              <div>
                <p className="text-white mb-2">Computer PNG:</p>
                <img 
                  src="/images/first-computer.png" 
                  alt="First Computer"
                  width="100" 
                  height="100"
                  style={{border: '2px solid white'}}
                />
              </div>
              
              <div>
                <p className="text-white mb-2">External Image:</p>
                <img 
                  src="https://picsum.photos/100/100" 
                  alt="Random Image"
                  width="100" 
                  height="100"
                  style={{border: '2px solid white'}}
                />
              </div>
              
              <div>
                <p className="text-white mb-2">External SVG:</p>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                  alt="JS Logo"
                  width="100" 
                  height="100"
                  style={{border: '2px solid white'}}
                />
              </div>
              
              <div>
                <p className="text-white mb-2">Data URI:</p>
                <img 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAEaElEQVR4nO2dP08UQRiHn10TogaJxsidMTGREOhMbGiMjdHEv9FYWdnbWpjY2VpYWJlY2ZnQWBmNiQjEcL8LiRLNHbAH3O5O5pvZ2Zn3SSjudm/nvZlv5vvmZwEhhBBCCCGEEEIIIYQQQggRCc9s27gAbAEXge0OfLkLPGvxs78D14Ef7m4JgF2gdMoOYA+4D9wAtrGJQIkUZDPiWQqP1W06+5/P9oEVD/4MSg/xR9Uj6QHrwGfKyJL1HbjaEa9S5RHwnbR9ywZ4BbQKiU9qQEHRg9h/U7TsTWL6ZRFp0SRQKiKZ0wWPkhLkrFOcokJpakOVITmTSopKZUikTjBrG/KsqSCF4ZnTwGtnXyLnBfDVKXYfGSqbojWfqTKWIOsOsZRKk+mUMdZvLEGmpE+dMo0QQ3WIRxQhZhhCkONpN5zxsw4CGnAa+xpcAf40+aBS0FyO36pJVF/Th9gSbVvnD4FbqQRZE2sObXL+ATivCPGEM8Z88KjxEw39EZ4w5oXTTZ5QhvjBmBdGTZ5UhnRgzAOPneIVIY7p2PdXjPW9QeYsNMAjM3R+MYmjVIY4oDLLI4oQMwhBwhN9HRJ9gCljrAyZMcaKkBlirAyZQcZKkHPG2CIHjGWPMVaGzBBjZcgMMVaGzBAjRYhnjLEy5JQxVob8Z6wImUHGipD/jDUP8YgadfMUDt3s4ZkuODZbF9wVOsLnCQmSN0GX30iQ/Ahe/yII0jXGiXhWQZBFY9zVt7LWGOsFmYdYdIqnNtQjTTeYTZwFMTHWQ9YUKzc1o46JcR5S58cGzLgOnrEyZIpxEhsZIUcREnxrukqPWhZdkEZESZA2BWOvDUWJIEWIRxQhZriUOoBM+MLwvVkxZchfhm/NipYhjxm+NStahvxl+NasKILsM3xrVtEEyRLNQzyi+YBHNEI8ogG+JhQhZpAgHllgeI4XJUMu4DBeRZcmn3vW5CcxBcnWYUVIfxQhHsllYhj9iZZFEUQZUsPDvkO0Q8aqUJZxLGqGtKbITQQShJlIEUXIDKEI8YjKLA1QM9cjhRN0EgklSGGIlyGVhRYktBPlBNWH9EcZYgZliEeUIWaQIB5RhpihqHs5JMhwaIQ1g0ZZMyiraTKBBMkbM22iT54LxyTIYANOcP5kQJF7eGqxxhUxVXS1jkOCmCHlq1FTpZf8FYe90CjrERXq5km5Jq+2v2aAMZx/6OqVcWrYI0PIkJRRYS2KDMkQ64JItU5FMXpWKkE2HWKxJmvdN+8hRf22tVsXv7HxNkLcFcM9fV+BFymDCcQB8BT44BQrQWpcAK7h59dH9oB7wAtsgqXCXxw+Aj5SH7DKDgixLNZRbAHfOCzX2v6Nt7D40W/N9mz/vhDC6Nk+R3i6tB1g3bfz8yCVTW2QU0FzCnjn0YENGwvzHGH1aZZ2DEwS+LKOEEIIIYQQ5vkHGhbLbzv4J+0AAAAASUVORK5CYII=" 
                  alt="Data URI Image"
                  width="100" 
                  height="100"
                  style={{border: '2px solid white'}}
                />
              </div>
            </div>
          </div>
          
          {/* API Response */}
          <div className="mt-4">
            <h3 className="text-md font-medium mb-2 text-white">API Response:</h3>
            {loading ? (
              <p className="text-white">Loading image information...</p>
            ) : (
              <pre className="bg-black p-2 rounded text-xs overflow-auto text-green-400">
                {JSON.stringify(imageTest, null, 2)}
              </pre>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 