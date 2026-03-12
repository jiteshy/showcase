import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

export const Contributions: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="p-6 lg:p-8 pb-4 lg:pb-6">
      <div className="flex items-center gap-4 mb-7">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Activity
        </span>
        <div className="flex-1 h-px bg-zinc-100" />
        <a
          href={import.meta.env.VITE_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-3.5 h-3.5 text-zinc-400 hover:text-zinc-700 transition-colors" />
        </a>
      </div>

      {!imageError ? (
        <img
          src={`https://ghchart.rshah.org/${import.meta.env.VITE_GITHUB_USERNAME}`}
          alt="GitHub Contributions"
          className="w-full h-auto rounded-xl grayscale opacity-70"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="text-center py-8">
          <p className="text-sm text-zinc-400">Unable to load GitHub contributions chart.</p>
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-700 underline mt-2 inline-block hover:text-zinc-500"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </section>
  );
};
