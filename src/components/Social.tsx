import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Linkedin, Github, BookOpen } from 'lucide-react';

interface SocialLink {
  title: string;
  link: string;
  icon: React.ReactNode;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    link: import.meta.env.VITE_LINKEDIN_URL,
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:text-[#0A66C2]"
  },
  {
    title: "GitHub",
    link: import.meta.env.VITE_GITHUB_URL,
    icon: <Github className="w-5 h-5" />,
    color: "hover:text-[#181717]"
  },
  {
    title: "Medium",
    link: import.meta.env.VITE_MEDIUM_URL,
    icon: <BookOpen className="w-5 h-5" />,
    color: "hover:text-[#000000]"
  }
];

export const Social: React.FC = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Connect</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-lg transition-all duration-200 ${social.color} hover:bg-gray-50`}
              title={social.title}
            >
              <div className="p-1.5 rounded-md transition-colors">
                {social.icon}
              </div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {social.title}
              </span>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
