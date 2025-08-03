import React, { useState } from 'react';

// --- Reusable Components (can be moved to a common folder) ---

const SettingsCard = ({ title, description, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
    <p className="text-sm text-gray-500 mt-1">{description}</p>
    <div className="mt-6 border-t border-gray-200 pt-6">
      {children}
    </div>
  </div>
);

const SettingsButton = ({ children, variant = 'primary' }) => {
  const baseClasses = "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all";
  const variants = {
    primary: "bg-primary text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
  };
  return <button className={`${baseClasses} ${variants[variant]}`}>{children}</button>;
};

const TabButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
      active
        ? 'bg-primary/10 text-primary'
        : 'text-gray-500 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);


/**
 * ==
 * FILE: /client/src/pages/settings/WorkspaceSettingsPage.jsx
 * PURPOSE: Page for Admins to manage the entire workspace, including users and teams.
 * ==
 */
const WorkspaceSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('members');

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Workspace Settings</h1>
        <p className="text-gray-500 mt-1 text-sm">Manage your organization's members, teams, and billing.</p>
      </div>

      <div className="flex items-center gap-2 border-b border-gray-200">
        <TabButton active={activeTab === 'members'} onClick={() => setActiveTab('members')}>Members</TabButton>
        <TabButton active={activeTab === 'teams'} onClick={() => setActiveTab('teams')}>Teams</TabButton>
        <TabButton active={activeTab === 'billing'} onClick={() => setActiveTab('billing')}>Billing</TabButton>
      </div>

      {/* Conditional rendering based on the active tab */}
      {activeTab === 'members' && (
        <SettingsCard
          title="Manage Members"
          description="Invite new members and manage their roles within the workspace."
        >
          <div className="flex justify-end">
            <SettingsButton>+ Invite Member</SettingsButton>
          </div>
          <p className="mt-4 text-center text-gray-500">Member management table would go here.</p>
        </SettingsCard>
      )}

      {activeTab === 'teams' && (
        <SettingsCard
          title="Manage Teams"
          description="Create new teams and assign team leaders and members."
        >
          <div className="flex justify-end">
            <SettingsButton>+ Create Team</SettingsButton>
          </div>
          <p className="mt-4 text-center text-gray-500">Team management list would go here.</p>
        </SettingsCard>
      )}

      {activeTab === 'billing' && (
        <SettingsCard
          title="Billing Information"
          description="Manage your subscription and view payment history."
        >
          <p className="mt-4 text-center text-gray-500">Billing details and history would go here.</p>
        </SettingsCard>
      )}
    </div>
  );
};

export default WorkspaceSettingsPage;
