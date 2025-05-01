
import React from 'react';
import { Layout } from '@/components/Layout';
import { Resume } from '@/components/Resume';
import { Social } from '@/components/Social';
import { Projects } from '@/components/Projects';
import { Contributions } from '@/components/Contributions';
import { MediumPosts } from '@/components/MediumPosts';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return (
      <Layout>
        <div className="w-full">
          <Resume />
          <Projects />
          <Contributions />
          <MediumPosts />
          <Social />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Left Column - Resume */}
      <div className="w-full lg:w-2/5 lg:h-[calc(100vh-56px)] lg:overflow-hidden lg:border-r border-border">
        <Resume />
      </div>
      
      {/* Right Column - Other content */}
      <div className="w-full lg:w-3/5 lg:h-[calc(100vh-56px)] lg:overflow-auto">
        <ScrollArea className="h-full">
          <div className="p-4">
            <Projects />
            <Contributions />
            <MediumPosts />
            <Social />
          </div>
        </ScrollArea>
      </div>
    </Layout>
  );
};

export default Index;
