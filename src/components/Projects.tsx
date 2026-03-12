import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  appLink?: string;
  tags: string[];
}

const getProjectData = (index: number): Project => {
  const env = import.meta.env;
  const baseKey = `VITE_PROJECT_${index + 1}`;

  return {
    title: env[`${baseKey}_TITLE`] || `Project ${index + 1}`,
    description: env[`${baseKey}_DESCRIPTION`] || 'No description available',
    link: env[`${baseKey}_GH_URL`] || '#',
    appLink: env[`${baseKey}_APP_URL`],
    tags: (env[`${baseKey}_TAGS`] || '').split(',').filter(Boolean)
  };
};

const projects: Project[] = [
  getProjectData(0),
  getProjectData(1)
];

export const Projects: React.FC = () => {
  return (
    <section className="p-6 lg:p-8">
      <div className="flex items-center gap-4 mb-7">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Projects
        </span>
        <div className="flex-1 h-px bg-zinc-100" />
        <a
          href={import.meta.env.VITE_GITHUB_REPOSITORIES_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-3.5 h-3.5 text-zinc-400 hover:text-zinc-700 transition-colors" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors duration-200 p-5"
          >
            <h3 className="font-semibold text-zinc-900 mb-1.5">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-0.5 text-xs text-zinc-500 bg-white border border-zinc-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.appLink && (
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 bg-zinc-200 rounded-md hover:bg-zinc-300 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open App
                </a>
              )}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 bg-zinc-200 rounded-md hover:bg-zinc-300 transition-colors"
              >
                <Github className="w-3 h-3" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
