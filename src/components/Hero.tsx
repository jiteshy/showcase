
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="section pt-20 lg:pt-28">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Jitesh Yadav
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Seasoned Software Engineer with 13 Years of Experience
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming complex problems into elegant, efficient solutions. 
            Passionate about building scalable systems and contributing to open source.
          </p>
        </div>
      </div>
    </section>
  );
};
