
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
      {/* Left Column - Resume - Now 1/2 instead of 2/5 */}
      <div className="w-full lg:w-1/2 lg:h-screen lg:overflow-hidden">
        <Resume />
      </div>
      
      {/* Right Column - Other content - Now 1/2 instead of 3/5 */}
      <div className="w-full lg:w-1/2 lg:h-screen">
        <ScrollArea className="h-full">
          <div className="p-2">
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
