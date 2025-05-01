
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
      <div className="container-custom h-full p-0">
        <div className={`w-full ${isMobile ? 'h-[500px]' : 'h-[calc(100vh-56px)]'} relative`}>
          <iframe
            src={resumeUrl}
            title="Resume"
            className="w-full h-full"
            allow="autoplay"
          />
          <Button 
            asChild 
            variant="ghost" 
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          >
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer" title="Download Resume">
              <Download className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
