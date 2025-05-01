
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
    <section className="section py-4" id="contributions">
      <div className="container-custom">
        <h2 className="text-xl font-bold mb-4">GitHub Contributions</h2>
        
        <Card>
          <CardContent className="p-4">
            {loading ? (
              <Skeleton className="w-full h-24" />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=jiteshy&theme=react&hide_border=true&include_all_commits=true&count_private=true&show_icons=true`}
                  alt="GitHub Stats"
                  className="w-full"
                />
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=jiteshy&theme=react&hide_border=true`}
                  alt="GitHub Streak"
                  className="w-full"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
