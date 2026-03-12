import React from "react";
import { Linkedin, Github, BookOpen } from "lucide-react";

interface SocialLink {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    link: import.meta.env.VITE_LINKEDIN_URL,
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    title: "GitHub",
    link: import.meta.env.VITE_GITHUB_URL,
    icon: <Github className="w-4 h-4" />,
  },
  {
    title: "Medium",
    link: import.meta.env.VITE_MEDIUM_URL,
    icon: <BookOpen className="w-4 h-4" />,
  },
];

export const Social: React.FC = () => {
  return (
    <div className="mt-auto pt-6">
      <div className="flex items-center gap-4 mb-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Connect</span>
        <div className="flex-1 h-px bg-zinc-100" />
      </div>
      <div className="space-y-0.5">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-200"
          >
            <span className="text-zinc-400 group-hover:text-zinc-700 transition-colors">
              {social.icon}
            </span>
            {social.title}
          </a>
        ))}
      </div>
    </div>
  );
};
