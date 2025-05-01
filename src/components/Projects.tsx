
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';
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
    <section className="section bg-secondary/30 py-6" id="projects">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-4 text-center">Open Source Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Github className="w-4 h-4 mr-2" />
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <CardDescription className={`${isMobile ? 'text-sm' : 'text-base'}`}>
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Link className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
