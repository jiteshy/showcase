import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-colors">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-gray-900">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-border font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
