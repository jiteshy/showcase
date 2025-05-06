import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-3 border-t border-border">
      <p className="text-center text-xs text-blue-700">
          Like this branding page?
          <a
            href="https://github.com/jiteshy/showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:text-blue-700 ml-1"
          >
            Fork it on GitHub
          </a>
        </p>
    </footer>
  );
};
