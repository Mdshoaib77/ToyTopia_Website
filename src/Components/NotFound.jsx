import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-600">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-indigo-600 underline mt-4 inline-block">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
