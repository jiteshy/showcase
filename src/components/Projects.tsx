import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  appLink?: string;
  tags: string[];
}

const getProjectData = (index: number): Project => {
  const env = import.meta.env;
  const baseKey = `VITE_PROJECT_${index + 1}`;
  
  return {
    title: env[`${baseKey}_TITLE`] || `Project ${index + 1}`,
    description: env[`${baseKey}_DESCRIPTION`] || 'No description available',
    link: env[`${baseKey}_GH_URL`] || '#',
    appLink: env[`${baseKey}_APP_URL`],
    tags: (env[`${baseKey}_TAGS`] || '').split(',').filter(Boolean)
  };
};

const projects: Project[] = [
  getProjectData(0),
  getProjectData(1)
];

export const Projects: React.FC = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
      <CardTitle className="flex items-center gap-4 justify-between -mt-1">
        <div>Open Source Projects</div>
          <a
            href={
              import.meta.env.VITE_GITHUB_REPOSITORIES_URL
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-x-auto gap-4 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group snap-start bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
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
                        className={`px-2 py-1 text-xs font-medium text-gray-500 border border-gray-200 rounded-full ${tagIndex === project.tags.length - 1 ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" : ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    {project.appLink && (
                      <a
                        href={project.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Open App
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
