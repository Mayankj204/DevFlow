import React from 'react';

// --- Import all the individual widget components for the dashboard ---
// CORRECTED FILE NAMES
import StatCard from '../../components/features/dashboard/StatCard';
import ProjectAnalyticsChart from '../../components/features/dashboard/ProjectAnalyticsChart';
import TeamCollaborationWidget from '../../components/features/dashboard/TeamCollaborationWidget';
import ReminderWidget from '../../components/features/dashboard/ReminderWidget'; // Corrected: singular
import ProjectListWidget from '../../components/features/dashboard/ProjectListWidget';
import ProjectProgressWidget from '../../components/features/dashboard/ProjectProgressWidget';
import TimeTrackerWidget from '../../components/features/dashboard/TimeTrackerWidget';


/**
 * ==============================================================================
 * FILE: /client/src/pages/dashboard/PersonalDashboardPage.jsx
 * PURPOSE: The main dashboard page a user sees after logging in. It assembles
 * all the dashboard widgets into the final UI.
 * ==============================================================================
 */
const PersonalDashboardPage = () => {
  return (
    <div className="p-6 h-full flex flex-col">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500 mt-1 text-sm">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button className="bg-primary text-white px-5 py-2.5 rounded-lg shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all text-sm font-semibold">
            + Add Project
          </button>
          <button className="bg-white text-gray-700 px-5 py-2.5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-semibold">
            Import Data
          </button>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Projects" value="24" changeText="Increased from last month" />
        <StatCard title="Ended Projects" value="10" changeText="Increased from last month" />
        <StatCard title="Running Projects" value="12" changeText="Increased from last month" />
        <StatCard title="Pending Project" value="2" changeText="On Discuss" onDiscuss />
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <ProjectAnalyticsChart />
          <TeamCollaborationWidget />
        </div>
        {/* Right Column */}
        <div className="space-y-6">
          <ReminderWidget />
          <ProjectListWidget />
          <ProjectProgressWidget />
          <TimeTrackerWidget />
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboardPage;
