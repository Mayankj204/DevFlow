import React from 'react';

// --- Reusable Components (can be moved to a common folder) ---

const StatCard = ({ title, value, changeText }) => (
    <div className="bg-white p-5 rounded-xl shadow-sm">
        <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <span className="text-gray-400 cursor-pointer">→</span>
        </div>
        <p className="text-3xl font-bold mt-2">{value}</p>
        <p className="text-xs text-green-500 mt-1 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L6.22 8.78a.75.75 0 11-1.06-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 11-1.06 1.06L10.75 5.612V16.25A.75.75 0 0110 17z" clipRule="evenodd" /></svg>
            <span>{changeText}</span>
        </p>
    </div>
);

const TeamPerformanceRow = ({ teamName, lead, progress, avatarUrl }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src={avatarUrl} alt={teamName} />
            <div>
                <p className="font-semibold text-sm text-gray-800">{teamName}</p>
                <p className="text-xs text-gray-500">Lead: {lead}</p>
            </div>
        </div>
        <div className="w-1/3">
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-xs text-right text-gray-500 mt-1">{progress}% complete</p>
        </div>
    </div>
);

/**
 * ==============================================================================
 * FILE: /client/src/pages/dashboard/PortfolioDashboardPage.jsx
 * PURPOSE: A high-level dashboard for Admins/Owners to see organization-wide stats.
 * ==============================================================================
 */
const PortfolioDashboardPage = () => {
  // Mock data for demonstration
  const teams = [
      { name: 'Frontend Team', lead: 'John Doe', progress: 75, avatar: 'https://i.pravatar.cc/40?u=frontend' },
      { name: 'Backend Team', lead: 'Jane Smith', progress: 90, avatar: 'https://i.pravatar.cc/40?u=backend' },
      { name: 'QA Team', lead: 'Peter Jones', progress: 60, avatar: 'https://i.pravatar.cc/40?u=qa' },
      { name: 'DevOps Team', lead: 'Susan Williams', progress: 85, avatar: 'https://i.pravatar.cc/40?u=devops' }
  ];

  return (
    <div className="p-6 h-full flex flex-col">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Portfolio Dashboard</h1>
          <p className="text-gray-500 mt-1 text-sm">An overview of all teams and projects in the workspace.</p>
        </div>
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          <button className="bg-white text-gray-700 px-5 py-2.5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-semibold">
            Export Report
          </button>
        </div>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Projects" value="12" changeText="+2 this week" />
        <StatCard title="Total Tasks Completed" value="1,284" changeText="+150 this week" />
        <StatCard title="Active Members" value="54" changeText="+3 new members" />
        <StatCard title="Overdue Tasks" value="8" changeText="-5 from last week" />
      </div>

      {/* Team Performance Widget */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
        <h2 className="font-bold text-lg text-gray-800">Team Performance</h2>
        <div className="mt-2">
            {teams.map(team => (
                <TeamPerformanceRow 
                    key={team.name}
                    teamName={team.name}
                    lead={team.lead}
                    progress={team.progress}
                    avatarUrl={team.avatar}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDashboardPage;
