
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
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
      <section className="section py-4">
        <div className="container-custom">
          <h2 className="text-xl font-bold mb-4">Recent Articles</h2>
          <div className="grid gap-4">
            <Skeleton className="w-full h-32" />
            <Skeleton className="w-full h-32" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section py-4">
      <div className="container-custom">
        <h2 className="text-xl font-bold mb-4">Recent Articles</h2>
        
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>{new Date(post.pubDate).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="sm">
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Link className="w-4 h-4 mr-2" />
                    Read Article
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
