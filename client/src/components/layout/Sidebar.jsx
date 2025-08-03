import React from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active styling

// --- Helper Components & Icons ---
const Icon = ({ children }) => <span className="w-5 h-5">{children}</span>;

const NavItem = ({ to, icon, children }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
          isActive
            ? 'bg-primary text-white'
            : 'text-gray-500 hover:bg-gray-100'
        }`
      }
    >
      <Icon>{icon}</Icon> {children}
    </NavLink>
  </li>
);

/**
 * ==============================================================================
 * FILE: /client/src/components/layout/Sidebar.jsx
 * PURPOSE: The main left sidebar component for navigation.
 * ==============================================================================
 */
const Sidebar = () => {
  return (
    <aside className="w-64 flex-col shrink-0 hidden lg:flex border-r border-gray-200">
      <div className="p-6 flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-primary p-2 rounded-lg">
            <Icon><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></Icon>
          </div>
          <h1 className="text-xl font-bold text-gray-800">DevFlow</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-grow">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Menu</p>
          <ul className="space-y-1">
            <NavItem to="/dashboard" icon={<svg fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>}>Dashboard</NavItem>
            <NavItem to="/tasks" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>}>Tasks</NavItem>
            <NavItem to="/calendar" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>}>Calendar</NavItem>
            <NavItem to="/portfolio" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>}>Portfolio</NavItem>
            <NavItem to="/teams" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}>Team</NavItem>
          </ul>

          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4 mt-8">General</p>
          <ul className="space-y-1">
            <NavItem to="/settings/profile" icon={<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}>Settings</NavItem>
          </ul>
        </nav>

        {/* Sidebar Footer Card */}
        <div className="bg-slate-800 text-white p-5 rounded-lg text-center mt-6">
          <p className="font-semibold text-sm">Download our Mobile App</p>
          <p className="text-xs text-slate-300 mt-1">Get an easy life with our mobile app</p>
          <button className="bg-primary w-full py-2 rounded-lg mt-4 text-sm font-semibold hover:opacity-90 transition-all">Download</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
