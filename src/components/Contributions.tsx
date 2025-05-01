
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const Contributions: React.FC = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulating the loading of contributions
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section" id="contributions">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-10 text-center">GitHub Contributions</h2>
        
        <Card>
          <CardContent className="p-6">
            {loading ? (
              <Skeleton className="w-full h-32 md:h-40" />
            ) : (
              <div className="flex flex-col items-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=jiteshy&theme=react&hide_border=true&include_all_commits=true&count_private=true&show_icons=true`}
                  alt="GitHub Stats"
                  className="w-full max-w-2xl mb-6"
                />
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=jiteshy&theme=react&hide_border=true`}
                  alt="GitHub Streak"
                  className="w-full max-w-2xl"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
