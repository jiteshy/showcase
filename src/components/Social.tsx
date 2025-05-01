
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Link } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Social: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section py-4" id="social">
      <div className="container-custom">
        <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="card-hover">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="mb-2 p-2 bg-blue-100 rounded-full">
                <Linkedin className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-md font-medium mb-1">LinkedIn</h3>
              <p className="text-xs text-muted-foreground mb-2 text-center">
                Connect professionally
              </p>
              <Button asChild variant="outline" size="sm">
                <a 
                  href="https://www.linkedin.com/in/jiteshyadav/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Link className="w-3 h-3 mr-1" />
                  Visit Profile
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="mb-2 p-2 bg-gray-100 rounded-full">
                <Github className="h-5 w-5 text-gray-800" />
              </div>
              <h3 className="text-md font-medium mb-1">GitHub</h3>
              <p className="text-xs text-muted-foreground mb-2 text-center">
                Code & contributions
              </p>
              <Button asChild variant="outline" size="sm">
                <a 
                  href="https://github.com/jiteshy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Link className="w-3 h-3 mr-1" />
                  Visit GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="mb-2 p-2 bg-green-100 rounded-full">
                <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M4.37 7.9A15 15 0 0 1 11.42 6C16.13 6 20 9.3 20 13.39c0 2.89-1.93 5.45-4.9 6.58-1.6.62-3.55.75-5.42.47a8 8 0 0 1-3.85-1.92c-2.48 2.1 1.1 2.94 3.27 3.41l.01.08c-3.23-.3-5.52-1.52-5.55-4.59 0-1.81.67-3.24 2.1-4.2L6 15.43v1.31c0 .93-.08 1.42-.39 1.84-.3.41-.7.64-1.27.7v.08c3.3-.33 4.75-3.2 5.07-4.67.34 1.77 1.34 3.92 1.67 4.67h1.07v-.08c-.57-.06-.97-.29-1.27-.7-.31-.42-.39-.91-.39-1.84v-2.22c0-2.24.59-2.47 2.93-2.47v-1.8c-.18.04-.33.05-.44.05-1.5 0-2.1.12-2.85 1.06l-.27.34v-1.6c.83-.19 1.33-.57 1.84-1.38L12.4 9v4.01h1.14V9l.38.39c.51.81 1 1.19 1.84 1.38v1.6l-.27-.34c-.78-.98-1.37-1.06-3.28-1.06v1.8c2.33 0 2.92.23 2.92 2.47v2.22c0 .93-.09 1.42-.39 1.84-.3.41-.7.64-1.27.7v.08h1.07c.33-.75 1.33-2.9 1.67-4.67.33 1.47 1.77 4.34 5.07 4.67v-.08c-.57-.06-.97-.29-1.27-.7-.31-.42-.39-.91-.39-1.84v-1.31l.33-2.24c1.43.96 2.1 2.39 2.1 4.2-.03 3.07-2.32 4.29-5.55 4.59l.01-.08c2.18-.47 5.75-1.31 3.27-3.41-.73.82-1.65 1.21-2.78 1.43-1.05.2-1.86.22-3.05-.05a4.84 4.84 0 0 1-2.47-1.4c-.35-.41-.56-.81-.56-1.17 0-.5.36-.97 1-1.31a4.29 4.29 0 0 1 2.16-.6c1.55 0 2.64.87 2.64 2.13 0 .96-.66 1.63-1.66 1.63-.34 0-.68-.09-.99-.24-.21-.11-.35-.23-.48-.43H8.8c.3.63.85 1 1.52 1 1.35 0 2.47-1.05 2.47-2.31 0-1.62-1.46-2.76-3.47-2.76-1.34 0-2.33.43-2.97 1.28-.43.57-.63 1.15-.63 2.04 0 .13.02.44.04.78.02.34.02.57.02.72 0 1.82.58 3.17 1.73 4.08z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-md font-medium mb-1">Medium</h3>
              <p className="text-xs text-muted-foreground mb-2 text-center">
                Articles & thoughts
              </p>
              <Button asChild variant="outline" size="sm">
                <a 
                  href="https://medium.com/@jiteshy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Link className="w-3 h-3 mr-1" />
                  Read Articles
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
