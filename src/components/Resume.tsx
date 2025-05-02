
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Resume: React.FC = () => {
  const isMobile = useIsMobile();
  const resumeUrl = "https://drive.google.com/file/d/13OPNZITL5pTvHgU7NItZJWt1pb_2Mcxa/preview";
  
  return (
    <section className="h-full">
      <div className="h-full">
        <div className={`w-full ${isMobile ? 'h-[500px]' : 'h-screen'}`}>
          <iframe
            src={resumeUrl}
            title="Resume"
            className="w-full h-full"
            style={{ 
              scrollbarWidth: 'none', // Makes scrollbar transparent
              msOverflowStyle: 'none' // For IE and Edge
            }}
            allow="autoplay"
          />
        </div>
      </div>
    </section>
  );
};
