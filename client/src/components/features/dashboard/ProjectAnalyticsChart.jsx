import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/features/dashboard/ProjectAnalyticsChart.jsx
 * PURPOSE: The bar chart widget for the main dashboard.
 * NOTE: This is a static visual representation. For a real app, you would use
 * a charting library like Recharts or Chart.js to render the bars dynamically.
 * ==============================================================================
 */
const ProjectAnalyticsChart = () => {
  const analyticsData = [
    { day: 'S', height: 45 },
    { day: 'M', height: 60 },
    { day: 'T', height: 85 },
    { day: 'W', height: 50 },
    { day: 'T', height: 70 },
    { day: 'F', height: 30 },
    { day: 'S', height: 90 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="font-bold text-lg text-gray-800">Project Analytics</h2>
      <div className="h-48 mt-4 flex items-end justify-between gap-1">
        {analyticsData.map((data, index) => (
          <div key={index} className="w-full flex flex-col items-center gap-2">
            <div
              className={`w-full ${data.height === 85 ? 'bg-primary' : 'bg-primary/20'} rounded-full transition-all hover:bg-primary/40`}
              style={{ height: `${data.height}%` }}
            ></div>
            <span className="text-xs font-medium text-gray-500">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAnalyticsChart;
