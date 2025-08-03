import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/features/dashboard/ProjectListWidget.jsx
 * PURPOSE: The "Project" task list widget for the dashboard.
 * ==============================================================================
 */
const ProjectListWidget = () => {
  const tasks = [
    { title: 'Develop API Endpoints', date: 'Nov 28, 2024', status: 'pending' },
    { title: 'Onboarding Flow', date: 'Nov 30, 2024', status: 'pending' },
    { title: 'Build Dashboard', date: 'Dec 2, 2024', status: 'pending' },
    { title: 'Optimize Page Load', date: 'Dec 4, 2024', status: 'pending' },
    { title: 'Cross-Browser Testing', date: 'Dec 5, 2024', status: 'incomplete' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg text-gray-800">Project</h2>
        <button className="text-primary text-sm font-semibold hover:underline">+ New</button>
      </div>
      <div className="mt-4 space-y-4">
        {tasks.map(task => (
          <div key={task.title} className="flex items-start gap-3">
            <div className={`w-4 h-4 mt-1 ${task.status === 'incomplete' ? 'border-2 border-gray-400' : 'bg-yellow-400'} rounded-full shrink-0`}></div>
            <div>
              <p className="text-sm font-medium text-gray-800">{task.title}</p>
              <p className="text-xs text-gray-400">Due date: {task.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectListWidget;
