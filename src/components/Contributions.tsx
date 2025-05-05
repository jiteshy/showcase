import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";

export const Contributions: React.FC = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <div>GitHub Activity</div>
          <a
            href={
              import.meta.env.VITE_GITHUB_URL
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5 text-gray-600" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <img
            src={`https://ghchart.rshah.org/${
              import.meta.env.VITE_GITHUB_USERNAME
            }`}
            alt="GitHub Contributions"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </CardContent>
    </Card>
  );
};
