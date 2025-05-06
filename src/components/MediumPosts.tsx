import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { ExternalLink } from 'lucide-react';

interface BlogPost {
  title: string;
  link: string;
  date: string;
}

const getPostData = (index: number): BlogPost => {
  const env = import.meta.env;
  const baseKey = `VITE_MEDIUM_ARTICLE_${index + 1}`;
  
  return {
    title: env[`${baseKey}_TITLE`] || `Blog Post ${index + 1}`,
    link: env[`${baseKey}_URL`] || '#',
    date: env[`${baseKey}_DATE`] || new Date().toISOString().split('T')[0]
  };
};

const posts: BlogPost[] = [
  getPostData(0),
  getPostData(1)
];

export const MediumPosts: React.FC = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 justify-between -mt-1">
        <div>Latest Blog Posts</div>
          <a
            href={
              import.meta.env.VITE_MEDIUM_URL
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-x-auto gap-4 snap-x snap-mandatory">
          {posts.map((post, index) => (
            <a 
              key={index} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group snap-start bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md hover:bg-gray-50 transition-all duration-300"
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
