import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

/**
 * ==============================================================================
 * FILE: /client/src/components/layout/AppLayout.jsx
 * PURPOSE: This component acts as a wrapper for all authenticated pages. It renders
 * the main layout structure (Sidebar + Header) and provides a space for the
 * child pages (via the Outlet) to be displayed.
 * ==============================================================================
 */
const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* The Outlet component is a special component from react-router-dom.
            It renders whatever child route is currently active. 
            For example, if the URL is '/dashboard', it will render the 
            PersonalDashboardPage component here.
          */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
