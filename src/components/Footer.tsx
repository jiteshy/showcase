import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-100 px-8 lg:px-10 py-4">
      <p className="text-center text-xs text-zinc-400">
        Fork the template on{' '}
        <a
          href="https://github.com/jiteshy/showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-700 underline underline-offset-2 hover:text-zinc-500 transition-colors"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};
