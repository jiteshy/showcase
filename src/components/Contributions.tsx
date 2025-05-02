
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';

export const Contributions: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Simulating the loading of contributions
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section py-3" id="contributions">
      <div className="container-custom">
        <h2 className="text-lg font-bold mb-2">GitHub Contributions</h2>
        
        <Card>
          <CardContent className="p-3">
            {loading ? (
              <Skeleton className="w-full h-24" />
            ) : (
              <div className="flex justify-center w-full">
                <iframe 
                  src="https://pages.codeadam.ca/github-contributions/jiteshy" 
                  width="100%" 
                  height="190" 
                  frameBorder="0" 
                  allowTransparency 
                  id="iframe"
                  title="GitHub Contributions"
                  className="max-w-full"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
