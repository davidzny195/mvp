import { ReactNode } from 'react';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[#28282B]">
      <div className="flex h-screen w-screen">
        <div>
          <Sidebar />
        </div>
        <div className="w-full h-full overflow-y-hidden">
          <Navbar />
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
