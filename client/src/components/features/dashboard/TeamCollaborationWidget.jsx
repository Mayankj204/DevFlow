import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/features/dashboard/TeamCollaborationWidget.jsx
 * PURPOSE: The widget displaying team members and their current tasks.
 * ==============================================================================
 */
const TeamCollaborationWidget = () => {
  const teamMembers = [
    { name: 'Alexandra Deff', task: 'Working on Github Project Repository', status: 'Completed', avatar: 'https://i.pravatar.cc/40?u=alexandra' },
    { name: 'Edwin Adenike', task: 'Working on Integrate User Authentication', status: 'In Progress', avatar: 'https://i.pravatar.cc/40?u=edwin' },
    { name: 'Isaac Oluwatomi', task: 'Develop Search and Filter Functionality', status: 'Pending', avatar: 'https://i.pravatar.cc/40?u=isaac' },
    { name: 'David Oshodi', task: 'Responsive Layout for Homepage', status: 'In Progress', avatar: 'https://i.pravatar.cc/40?u=david' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-600';
      case 'In Progress': return 'text-blue-600';
      case 'Pending': return 'text-yellow-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg text-gray-800">Team Collaboration</h2>
        <button className="text-primary text-sm font-semibold hover:underline">+ Add Member</button>
      </div>
      <div className="mt-2">
        {teamMembers.map(member => (
          <div key={member.name} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center gap-4">
              <img className="w-10 h-10 rounded-full" src={member.avatar} alt={member.name} />
              <div>
                <p className="font-semibold text-sm text-gray-800">{member.name}</p>
                <p className="text-xs text-gray-500">{member.task}</p>
              </div>
            </div>
            <span className={`text-xs font-medium ${getStatusColor(member.status)}`}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollaborationWidget;
