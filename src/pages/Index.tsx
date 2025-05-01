
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Resume } from '@/components/Resume';
import { Social } from '@/components/Social';
import { Projects } from '@/components/Projects';
import { Contributions } from '@/components/Contributions';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <Layout>
        <div className="w-full">
          <Hero />
          <Resume />
          <Projects />
          <Contributions />
          <Social />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Left Column - Resume */}
      <div className="w-full lg:w-1/2 lg:h-[calc(100vh-116px)] lg:overflow-hidden lg:border-r border-border">
        <ScrollArea className="h-full">
          <Resume />
        </ScrollArea>
      </div>
      
      {/* Right Column - Other content */}
      <div className="w-full lg:w-1/2 lg:h-[calc(100vh-116px)] lg:overflow-auto">
        <ScrollArea className="h-full">
          <Hero />
          <Projects />
          <Contributions />
          <Social />
        </ScrollArea>
      </div>
    </Layout>
  );
};

export default Index;
