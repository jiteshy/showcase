
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Link } from 'lucide-react';

export const Social: React.FC = () => {
  return (
    <section className="section bg-secondary/50" id="social">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-center">Connect With Me</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="mb-4 p-3 bg-blue-100 rounded-full">
                <Linkedin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">LinkedIn</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Connect with me professionally and explore my career journey
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://www.linkedin.com/in/jiteshyadav/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Link className="w-4 h-4 mr-2" />
                  Visit Profile
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="mb-4 p-3 bg-gray-100 rounded-full">
                <Github className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-xl font-medium mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-4 text-center">
                Explore my open-source contributions and personal projects
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://github.com/jiteshy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Link className="w-4 h-4 mr-2" />
                  Visit GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
