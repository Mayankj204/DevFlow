import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/features/dashboard/StatCard.jsx
 * PURPOSE: A reusable card component to display a single key statistic on the dashboard.
 * ==============================================================================
 */
const StatCard = ({ title, value, changeText, onDiscuss = false }) => (
    <div className="bg-white p-5 rounded-xl shadow-sm">
        <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <span className="text-gray-400 cursor-pointer transition-transform hover:translate-x-1">→</span>
        </div>
        <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
        <div className={`text-xs mt-1 flex items-center gap-1 ${onDiscuss ? 'text-yellow-500' : 'text-green-500'}`}>
            {!onDiscuss && (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L6.22 8.78a.75.75 0 11-1.06-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 11-1.06 1.06L10.75 5.612V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                </svg>
            )}
            <span>{changeText}</span>
        </div>
    </div>
);

export default StatCard;
