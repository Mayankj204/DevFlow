import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ==
 * FILE: /client/src/pages/NotFoundPage.jsx
 * PURPOSE: A fallback page for any route that doesn't match.
 * ==
 */
const NotFoundPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center text-center p-8 font-sans">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-4xl font-bold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-lg text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="mt-10">
        <Link to="/" className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
