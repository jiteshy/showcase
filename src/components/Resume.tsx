
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Resume: React.FC = () => {
  const isMobile = useIsMobile();
  const resumeUrl = "https://drive.google.com/file/d/13OPNZITL5pTvHgU7NItZJWt1pb_2Mcxa/preview";
  
  return (
    <section className="h-full flex flex-col">
      <div className="container-custom h-full p-0">
        <div className={`w-full ${isMobile ? 'h-[500px]' : 'h-[calc(100vh-56px)]'}`}>
          <iframe
            src={resumeUrl}
            title="Resume"
            className="w-full h-full"
            style={{ 
              scrollbarColor: 'auto transparent',
              scrollbarWidth: 'thin'
            }}
            allow="autoplay"
          />
        </div>
      </div>
    </section>
  );
};
