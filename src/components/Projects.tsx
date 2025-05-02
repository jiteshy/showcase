
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Project {
  name: string;
  description: string;
  url: string;
}

export const Projects: React.FC = () => {
  const isMobile = useIsMobile();
  const projects: Project[] = [
    {
      name: "CollabX",
      description: "A collaboration platform designed to streamline team workflows and enhance productivity through intuitive interfaces and powerful integrations.",
      url: "https://github.com/jiteshy/collabx",
    },
    {
      name: "Backstage Plugin Synergy",
      description: "A plugin for Backstage that enhances developer experience by providing synergy between different tools and services within the Backstage ecosystem.",
      url: "https://github.com/jiteshy/backstage-plugin-synergy",
    }
  ];

  return (
    <section className="section py-3" id="projects">
      <div className="container-custom">
        <h2 className="text-lg font-bold mb-2">Open Source Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-1 pr-8 relative">
                <CardTitle className="text-base">
                  {project.name}
                </CardTitle>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className={`${isMobile ? 'text-xs' : 'text-sm'} line-clamp-2`}>
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
