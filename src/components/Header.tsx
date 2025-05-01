
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

export const Header: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="py-4 border-b border-border">
      <div className="container-custom flex justify-between items-center">
        <h1 className="text-xl font-bold">Jitesh Yadav</h1>
        {!isMobile && (
          <nav>
            <ul className="flex gap-6">
              <li><a href="#resume" className="hover:text-primary transition-colors">Resume</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contributions" className="hover:text-primary transition-colors">Contributions</a></li>
              <li><a href="#social" className="hover:text-primary transition-colors">Connect</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
