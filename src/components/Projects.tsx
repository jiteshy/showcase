
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  url: string;
}

export const Projects: React.FC = () => {
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
    <section className="section bg-secondary/30" id="projects">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-center">Open Source Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
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
