import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";

export const Contributions: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-4 -mt-1">
          <div>GitHub Activity</div>
          <a
            href={
              import.meta.env.VITE_GITHUB_URL
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white rounded-lg border border-border hover:bg-gray-50 p-4">
          {!imageError ? (
            <img
              src={`https://ghchart.rshah.org/${
                import.meta.env.VITE_GITHUB_USERNAME
              }`}
              alt="GitHub Contributions"
              className="w-full h-auto rounded-lg"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">Unable to load GitHub contributions chart.</p>
              <a
                href={import.meta.env.VITE_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 mt-2 inline-block"
              >
                View GitHub Profile
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
