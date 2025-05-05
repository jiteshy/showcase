import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ExternalLink } from 'lucide-react';

interface BlogPost {
  title: string;
  link: string;
  date: string;
}

const posts: BlogPost[] = [
  {
    title: "Real App: The Same Prompt, 3 AI Coding Assistants, 1 Winner",
    link: import.meta.env.VITE_MEDIUM_ARTICLE_1_URL,
    date: "2024-01-01"
  },
  {
    title: "From First Draft to Production-Ready App with Cursor",
    link: import.meta.env.VITE_MEDIUM_ARTICLE_2_URL,
    date: "2024-01-02"
  }
];

export const MediumPosts: React.FC = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
        <div>Latest Blog Posts</div>
          <a
            href={
              import.meta.env.VITE_MEDIUM_URL
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5 text-gray-600" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory">
          {posts.map((post, index) => (
            <a 
              key={index} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex-1 snap-start bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    Posted on {post.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
