import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  
  return (
    <div className="h-16 bg-[#121212] border-b border-[#282828] px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => router.back()}
          className="bg-[#282828] rounded-full p-2 hover:bg-[#383838]"
        >
          ←
        </button>
        <button 
          onClick={() => router.forward()}
          className="bg-[#282828] rounded-full p-2 hover:bg-[#383838]"
        >
          →
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="bg-white text-black px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Resume
        </a>
      </div>
    </div>
  );
} 