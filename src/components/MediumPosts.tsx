
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export const MediumPosts: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading Medium posts (in a real app, you'd fetch from Medium API)
    const timer = setTimeout(() => {
      setPosts([
        {
          title: "Mastering Microservices Architecture",
          link: "https://medium.com/@jiteshy/mastering-microservices",
          pubDate: "2023-04-15",
          description: "A comprehensive guide to building scalable microservices architecture"
        },
        {
          title: "The Future of DevOps in 2023",
          link: "https://medium.com/@jiteshy/future-of-devops",
          pubDate: "2023-03-22", 
          description: "Exploring the evolving landscape of DevOps practices and tools"
        }
      ]);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="section py-3">
        <div className="container-custom">
          <h2 className="text-lg font-bold mb-2">Recent Articles</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section py-3">
      <div className="container-custom">
        <h2 className="text-lg font-bold mb-2">Recent Articles</h2>
        
        <div className="grid md:grid-cols-2 gap-3">
          {posts.map((post, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-1 pr-8 relative">
                <CardTitle className="text-base">{post.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{new Date(post.pubDate).toLocaleDateString()}</p>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-sm line-clamp-2">{post.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
