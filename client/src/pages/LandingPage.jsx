import React from 'react';
import { Link } from 'react-router-dom'; // Make sure react-router-dom is installed

/**
 * ==============================================================================
 * FILE: /client/src/pages/LandingPage.jsx
 * PURPOSE: A public landing page to describe the DevFlow application.
 * ==============================================================================
 */
const LandingPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center font-sans">
      <div className="text-center p-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-primary p-2 rounded-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h1 className="text-5xl font-bold text-gray-800">DevFlow</h1>
        </div>
        <p className="text-xl text-gray-500 mt-2 max-w-2xl mx-auto">
          The integrated platform for project management and development workflow. Plan, collaborate, and deliver projects faster.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link to="/signup" className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all">
            Get Started
          </Link>
          <Link to="/login" className="bg-white text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
