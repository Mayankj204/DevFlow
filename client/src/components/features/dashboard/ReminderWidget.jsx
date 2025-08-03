import React from 'react';

const RemindersWidget = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="font-bold text-lg text-gray-800">Reminders</h2>
    <div className="mt-4 bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
      <p className="font-bold text-sm">Meeting with Arc Company</p>
      <p className="text-xs text-gray-500 mt-1">Time: 02:00 PM - 04:00 PM</p>
      <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
        Start Meeting
      </button>
    </div>
  </div>
);

export default RemindersWidget;