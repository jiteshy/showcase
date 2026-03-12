import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <img
        src="profile.jpg"
        alt="Jitesh Yadav"
        className="w-14 h-14 rounded-full object-cover grayscale border border-zinc-200 mb-3"
      />

      <h1 className="text-2xl font-bold text-zinc-900 tracking-tight leading-snug mb-1">
        Hello, I'm<br />Jitesh Yadav
      </h1>
      <p className="text-sm font-medium text-zinc-600 mb-5">
        Frontend-focused Full Stack Engineer
      </p>

      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">About Me</span>
        <div className="flex-1 h-px bg-zinc-100" />
      </div>

      <div className="space-y-3 text-sm text-zinc-500 leading-relaxed">
        <p>
          Fullstack engineer with a thing for building products people
          actually enjoy using.
        </p>
        <p>
          I work at the intersection of frontend architecture and hands-on
          engineering - designing systems while staying close enough to the
          code to make informed decisions. Particularly interested in
          developer platforms and productivity, including Backstage and the
          open-source ecosystem.
        </p>
        <p>
          Outside of work, I'm always tinkering - lately with AI tools,
          building side projects, and writing about what I learn along the
          way. Fun times to be building.
        </p>
      </div>
    </div>
  );
};
