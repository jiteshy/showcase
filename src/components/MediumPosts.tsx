import React from 'react';
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
    <section className="p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-7">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Writing
        </span>
        <div className="flex-1 h-px bg-zinc-100" />
        <a
          href={import.meta.env.VITE_MEDIUM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-3.5 h-3.5 text-zinc-400 hover:text-zinc-700 transition-colors" />
        </a>
      </div>

      <div className="space-y-5">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4"
          >
            <div>
              <h3 className="font-semibold text-zinc-900 leading-snug group-hover:text-zinc-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">{post.date}</p>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-300 group-hover:text-zinc-500 flex-shrink-0 mt-1 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
};
