
import React from 'react';
import { Footer } from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col lg:flex-row">
        {children}
      </main>
      <Footer />
    </div>
  );
};
