import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
    icon: <Linkedin className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    title: "GitHub",
    link: import.meta.env.VITE_GITHUB_URL,
    icon: <Github className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    title: "Medium",
    link: import.meta.env.VITE_MEDIUM_URL,
    icon: <BookOpen className="w-4 h-4 md:w-5 md:h-5" />,
  },
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
              className={`group flex flex-1 md:flex-auto items-center justify-center md:gap-2 pl-1 pr-2 py-0 md:px-3 md:py-1 border border-border rounded-lg transition-all duration-200 hover:bg-gray-50`}
              title={social.title}
            >
              <div className="p-1.5 rounded-md text-blue-600 transition-colors">
                {social.icon}
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-colors">
                {social.title}
              </span>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
