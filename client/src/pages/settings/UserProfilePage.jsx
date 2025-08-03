import React from 'react';

// --- Reusable Components for the Settings Pages ---

const SettingsCard = ({ title, description, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
    <p className="text-sm text-gray-500 mt-1">{description}</p>
    <div className="mt-6 border-t border-gray-200 pt-6">
      {children}
    </div>
  </div>
);

const InputField = ({ label, type, placeholder, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
    />
  </div>
);

const SettingsButton = ({ children, variant = 'primary' }) => {
  const baseClasses = "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all";
  const variants = {
    primary: "bg-primary text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
  };
  return <button className={`${baseClasses} ${variants[variant]}`}>{children}</button>;
};

/**
 * ==
 * FILE: /client/src/pages/settings/UserProfilePage.jsx
 * PURPOSE: Page for users to manage their personal profile information.
 * ==
 */
const UserProfilePage = () => {
  // In a real app, user data would come from your AuthContext or an API call
  const currentUser = {
    name: 'Totok Michael',
    email: 'tmichael00@mail.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=totok',
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Profile Settings</h1>
        <p className="text-gray-500 mt-1 text-sm">Manage your personal information and password.</p>
      </div>

      <SettingsCard
        title="Personal Information"
        description="Update your photo and personal details here."
      >
        <div className="flex items-center gap-6">
          <img src={currentUser.avatarUrl} alt="User Avatar" className="w-20 h-20 rounded-full object-cover" />
          <div className="flex gap-3">
            <SettingsButton variant="primary">Upload New Picture</SettingsButton>
            <SettingsButton variant="secondary">Delete</SettingsButton>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" type="text" value={currentUser.name} />
          <InputField label="Email Address" type="email" value={currentUser.email} />
        </div>
        <div className="mt-6 text-right">
            <SettingsButton>Save Changes</SettingsButton>
        </div>
      </SettingsCard>

      <SettingsCard
        title="Change Password"
        description="To change your password, please enter your current password and a new password."
      >
        <div className="space-y-6">
          <InputField label="Current Password" type="password" placeholder="••••••••" />
          <InputField label="New Password" type="password" placeholder="••••••••" />
          <InputField label="Confirm New Password" type="password" placeholder="••••••••" />
        </div>
         <div className="mt-6 text-right">
            <SettingsButton>Update Password</SettingsButton>
        </div>
      </SettingsCard>
    </div>
  );
};

export default UserProfilePage;
