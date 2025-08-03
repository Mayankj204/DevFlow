import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// --- Import Page Components ---
// You will create these page components in their respective folders
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import PersonalDashboardPage from '../pages/dashboard/PersonalDashboardPage';
import PortfolioDashboardPage from '../pages/dashboard/PortfolioDashboardPage';
import ProjectBoardPage from '../pages/project/ProjectBoardPage';
import WorkspaceSettingsPage from '../pages/settings/WorkspaceSettingsPage';
import UserProfilePage from '../pages/settings/UserProfilePage';
import NotFoundPage from '../pages/NotFoundPage';

// --- Import Layout and Auth Components ---
import useAuth from '../hooks/useAuth'; // We will create this hook later
import AppLayout from '../components/layout/AppLayout'; // A wrapper for pages with sidebar/header

/**
 * ==============================================================================
 * PrivateRoute Component
 * PURPOSE: A wrapper component that checks if a user is logged in.
 * If not, it redirects them to the login page.
 * ==============================================================================
 */
const PrivateRoute = ({ children }) => {
  // This is a placeholder for your actual authentication logic
  const isAuthenticated = true; // Replace with logic from your AuthContext
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them back after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};


/**
 * ==============================================================================
 * AppRouter Component
 * PURPOSE: Defines all the navigation routes for the entire application.
 * ==============================================================================
 */
const AppRouter = () => {
  return (
    <Routes>
      {/* --- Public Routes --- */}
      {/* These routes are accessible to everyone */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* --- Private Routes --- */}
      {/* These routes are protected and require the user to be logged in. */}
      {/* They are wrapped within a parent route that provides the main AppLayout (Sidebar + Header) */}
      <Route 
        path="/"
        element={
          <PrivateRoute>
            <AppLayout />
          </PrivateRoute>
        }
      >
        {/* The default page after login will be the personal dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        
        <Route path="dashboard" element={<PersonalDashboardPage />} />
        <Route path="portfolio" element={<PortfolioDashboardPage />} />
        <Route path="project/:projectId" element={<ProjectBoardPage />} />
        
        <Route path="settings">
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="workspace" element={<WorkspaceSettingsPage />} />
        </Route>
      </Route>

      {/* --- Not Found Route --- */}
      {/* This will catch any URL that doesn't match the routes above */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
