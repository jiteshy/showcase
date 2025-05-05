import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "CollabX",
    description: "A real-time collaborative text editor.",
    link: import.meta.env.VITE_PROJECT_1_URL,
    tags: ["Next.js", "Nest.js", "TypeScript", "Socket.io", "WebSockets", "Redis"]
  },
  {
    title: "Backstage Plugin Synergy",
    description: "A Backstage plugin for inner-source collaboration.",
    link: import.meta.env.VITE_PROJECT_2_URL,
    tags: ["Backstage", "React", "Node.js", "TypeScript"]
  }
];

export const Projects: React.FC = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
      <CardTitle className="flex items-center gap-4">
        <div>Open Source Projects</div>
          <a
            href={
              import.meta.env.VITE_GITHUB_REPOSITORIES_URL
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5 text-gray-600" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex-1 snap-start bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-1 text-xs font-medium text-gray-500 border border-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
