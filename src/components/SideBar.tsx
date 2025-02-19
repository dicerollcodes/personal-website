import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SideBar() {
  const router = useRouter();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="w-64 bg-[#121212] p-6 h-screen fixed left-0 top-0">
      <div className="mb-8">
        <Link href="/" className="text-2xl font-bold text-white hover:text-green-400 transition-colors">
          Justin Bustamante
        </Link>
      </div>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block py-2 px-4 mb-2 rounded transition-colors ${
              router.pathname === item.path
                ? 'bg-green-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-[#282828]'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-6">
        <div className="flex space-x-4">
          <a href="https://github.com/dicerollcodes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/justin-bustamante/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            LinkedIn
          </a>
          <a href="mailto:bustjustin2007@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </div>
  );
} 