import { ReactNode } from 'react';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[#28282B] w-screen h-screen">
      <div className="flex h-full">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
