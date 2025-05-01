
import React from 'react';
import { Button } from '@/components/ui/button';
import { FilePdf, Download } from 'lucide-react';

export const Resume: React.FC = () => {
  const resumeUrl = "https://drive.google.com/file/d/13OPNZITL5pTvHgU7NItZJWt1pb_2Mcxa/preview";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=13OPNZITL5pTvHgU7NItZJWt1pb_2Mcxa";
  
  return (
    <section className="section" id="resume">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <div className="flex justify-center mb-6">
            <Button asChild variant="outline" className="mr-4">
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl h-[800px] border border-border rounded-lg overflow-hidden shadow-md bg-white">
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
