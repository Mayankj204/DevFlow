import React from 'react';
import useAuth from '../../hooks/useAuth'; // Assuming you have this hook

// --- Helper Components & Icons ---
const Icon = ({ children }) => <span className="w-6 h-6">{children}</span>;

/**
 * ==============================================================================
 * FILE: /client/src/components/layout/Header.jsx
 * PURPOSE: The top navigation bar with search, notifications, and user profile.
 * ==============================================================================
 */
const Header = () => {
  // In a real app, user data would come from your useAuth hook
  const user = {
    name: 'Totok Michael',
    email: 'tmichael00@mail.com',
    avatarUrl: 'https://i.pravatar.cc/40?u=totok'
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200 shrink-0">
      {/* Search Bar */}
      <div className="relative w-full max-w-xs">
        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
            <Icon><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></Icon>
        </div>
        <input 
          type="text" 
          placeholder="Search task" 
          className="bg-slate-100 w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button className="text-gray-500 hover:text-primary transition-all">
            <Icon><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></Icon>
        </button>
        <button className="text-gray-500 hover:text-primary transition-all">
            <Icon><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg></Icon>
        </button>
        
        {/* User Profile Dropdown */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img className="w-10 h-10 rounded-full object-cover" src={user.avatarUrl} alt="User avatar" />
          <div className="hidden sm:block">
            <p className="font-semibold text-sm text-gray-800">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
