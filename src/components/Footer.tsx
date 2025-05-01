
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border">
      <div className="container-custom">
        <p className="text-center text-muted-foreground">
          © {currentYear} Jitesh Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
