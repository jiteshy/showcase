import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

const RESUME_URL = '/resume.pdf';

export const Resume: React.FC = () => {
  return (
    <div className="h-full relative -ml-[5px] w-[calc(100%+10px)]">
      {/* Top-right icons */}
      <div className="absolute top-4 right-4 z-10 flex gap-3">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="Open in new tab"
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          <ExternalLink className="w-5 h-5 text-gray-600" />
        </a>
        <a
          href={RESUME_URL}
          download
          title="Download PDF"
          className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition"
        >
          <Download className="w-5 h-5 text-gray-600" />
        </a>
      </div>
      {/* PDF Viewer */}
      <div className="h-full w-full">
        <iframe
          src={`${RESUME_URL}#toolbar=0&navpanes=0`}
          className="w-full h-full"
          title="Resume PDF Viewer"
        />
      </div>
    </div>
  );
};
