import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export default function NowPlaying() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const res = await fetch('/api/spotify');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        if (!data.title) {
          setError('No song data available');
          setLoading(false);
          return;
        }
        
        setData(data);
        setError(null);
      } catch (error) {
        setError('Failed to load song data');
        console.error('Error fetching Spotify data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center space-x-4 bg-[#282828] p-4 rounded-lg w-full max-w-sm animate-pulse">
        <div className="w-16 h-16 bg-gray-700 rounded" />
        <div className="flex-1">
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-700 rounded w-1/2" />
        </div>
        <div className="w-5 h-5 bg-gray-700 rounded-full" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center space-x-4 bg-[#282828] p-4 rounded-lg w-full max-w-sm">
        <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-600" viewBox="0 0 168 168">
            <path
              fill="currentColor"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-medium text-gray-400">
            {error || 'Not playing'}
          </p>
          <p className="text-gray-500 text-sm">
            Spotify
          </p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 bg-[#282828] p-4 rounded-lg w-full max-w-sm hover:bg-[#383838] transition-colors group"
    >
      <div className="relative w-16 h-16 rounded overflow-hidden">
        <Image
          src={data.albumImageUrl}
          alt={`${data.title} album art`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-white truncate group-hover:text-green-400">
          {data.title}
        </p>
        <p className="text-gray-400 text-sm truncate">
          {data.isPlaying ? 'Now playing' : 'Last played'} • {data.artist}
        </p>
      </div>
      <svg className="w-5 h-5 text-green-400" viewBox="0 0 168 168">
        <path
          fill="currentColor"
          d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
        />
      </svg>
    </a>
  );
} 