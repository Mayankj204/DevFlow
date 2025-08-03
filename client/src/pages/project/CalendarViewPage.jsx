import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/pages/project/CalendarViewPage.jsx
 * PURPOSE: A placeholder page for the Calendar view of a project.
 * ==============================================================================
 */
const CalendarViewPage = () => {
  return (
    <div className="p-6 h-full flex flex-col">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Project Calendar</h1>
          <p className="text-gray-500 mt-1 text-sm">View your tasks and deadlines on a calendar.</p>
        </div>
      </div>

      {/* Placeholder Content */}
      <div className="flex-grow bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">Calendar View Feature</h3>
          <p className="mt-1 text-sm text-gray-500">This feature is coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarViewPage;
