import { ReactNode, useState } from 'react';
import SideBar from './SideBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#121212]">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-[#282828] text-white"
      >
        {isSidebarOpen ? '×' : '☰'}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-56
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <SideBar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full p-0 mt-16 lg:mt-0">
        <div className="p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
} 