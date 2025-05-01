
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className={`section ${isMobile ? 'pt-10' : 'pt-8'}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold tracking-tight mb-2`}>
            Jitesh Yadav
          </h1>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-muted-foreground mb-4`}>
            Seasoned Software Engineer with 13 Years of Experience
          </p>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Transforming complex problems into elegant, efficient solutions. 
            Passionate about building scalable systems and contributing to open source.
          </p>
        </div>
      </div>
    </section>
  );
};
