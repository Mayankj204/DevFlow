import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/features/dashboard/TimeTrackerWidget.jsx
 * PURPOSE: The "Time Tracker" widget for the dashboard.
 * ==============================================================================
 */
const TimeTrackerWidget = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="font-bold text-lg text-gray-800">Time Tracker</h2>
      <div className="text-center my-4">
        <p className="text-4xl font-mono text-gray-800">01:24:08</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button 
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors" 
          aria-label="Pause timer"
        >
          ||
        </button>
        <button 
          className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full shadow-lg hover:opacity-90 transition-opacity" 
          aria-label="Start timer"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </button>
        <button 
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors" 
          aria-label="Stop timer"
        >
          ■
        </button>
      </div>
    </div>
  );
};

export default TimeTrackerWidget;
