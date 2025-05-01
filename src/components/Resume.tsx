
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Resume: React.FC = () => {
  const isMobile = useIsMobile();
  const resumeUrl = "https://drive.google.com/file/d/13OPNZITL5pTvHgU7NItZJWt1pb_2Mcxa/preview";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=13OPNZITL5pTvHgU7NItZJWt1pb_2Mcxa";
  
  return (
    <section className="h-full flex flex-col">
      <div className="container-custom h-full flex flex-col">
        <div className="flex justify-end mb-2">
          <Button asChild variant="ghost" size="icon">
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer" title="Download Resume">
              <Download className="w-4 h-4" />
            </a>
          </Button>
        </div>
        
        <div className="w-full flex-grow flex justify-center">
          <div className={`w-full max-w-3xl ${isMobile ? 'h-[500px]' : 'h-[calc(100vh-150px)]'} border border-border rounded-lg overflow-hidden shadow-md bg-white`}>
            <iframe
              src={resumeUrl}
              title="Resume"
              className="w-full h-full"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
