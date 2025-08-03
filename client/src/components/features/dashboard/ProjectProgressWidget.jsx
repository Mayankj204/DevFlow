import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/features/dashboard/ProjectProgressWidget.jsx
 * PURPOSE: The circular progress bar widget for the dashboard.
 * ==============================================================================
 */
const ProjectProgressWidget = () => {
  const progress = 41; // Progress percentage

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="font-bold text-lg text-gray-800">Project Progress</h2>
      <div className="relative w-36 h-36 mx-auto my-4">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
          {/* Background Circle */}
          <path
            className="text-gray-200"
            strokeWidth="4"
            fill="none"
            stroke="currentColor"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Progress Circle */}
          <path
            className="text-primary"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            stroke="currentColor"
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        {/* Text in the middle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-gray-800">{progress}%</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 text-center -mt-2">Project Ended</p>
      
      {/* Legend */}
      <div className="flex justify-center gap-4 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <span>Pending</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgressWidget;
