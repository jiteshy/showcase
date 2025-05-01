
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Link } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Social: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section bg-secondary/50 py-6" id="social">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-4 text-center">Connect With Me</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="card-hover">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="mb-3 p-2 bg-blue-100 rounded-full">
                <Linkedin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-3 text-center">
                Connect with me professionally
              </p>
              <Button asChild variant="outline" size="sm">
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
            <CardContent className="p-4 flex flex-col items-center">
              <div className="mb-3 p-2 bg-gray-100 rounded-full">
                <Github className="h-6 w-6 text-gray-800" />
              </div>
              <h3 className="text-lg font-medium mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground mb-3 text-center">
                Explore my open-source contributions
              </p>
              <Button asChild variant="outline" size="sm">
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
