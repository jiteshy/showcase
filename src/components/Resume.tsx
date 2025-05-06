import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";

const RESUME_URL = import.meta.env.VITE_RESUME_URL + '?embedded=true';
const RESUME_VIEW_URL = import.meta.env.VITE_RESUME_VIEW_URL;
const RESUME_DOWNLOAD_URL = import.meta.env.VITE_RESUME_DOWNLOAD_URL;

export const Resume: React.FC = () => {
  return (
    <Card className="bg-white pr-4 h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-4 justify-between -mt-1">
          <div>Resume</div>
          <div className="flex gap-2">
            <a
              href={RESUME_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Open
            </a>
            <a
              href={RESUME_DOWNLOAD_URL}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Download
            </a>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-full rounded-lg overflow-hidden border border-gray-200 -mr-4">
          {/* PDF Viewer */}
          <div className="h-full w-[calc(100%+1rem)]">
            <iframe
              src={RESUME_URL}
              className="w-full h-full min-h-[700px]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
