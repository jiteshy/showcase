import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="section pt-4 md:pt-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center animate-fade-in relative z-10">
        <div className="flex justify-center mb-6">
          <img
            src="/profile.jpg"
            alt="Jitesh Yadav"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-2"
        >
          Jitesh Yadav
        </h1>
        <p
          className="text-sm md:text-xl text-muted-foreground mb-2 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Seasoned Software Engineer with 13+ years of experience
        </p>
        <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
          Transforming complex problems into efficient solutions.
          Passionate about continuous learning and building scalable systems.
        </p>
      </div>
    </section>
  );
};