import { ReactNode } from 'react';
import SideBar from './SideBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#121212]">
      <SideBar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl pl-4">
          {children}
        </div>
      </main>
    </div>
  );
} 