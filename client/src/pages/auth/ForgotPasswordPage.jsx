import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import authApi from '../../api/auth.api'; // You would use this to call the backend

// --- Reusable Components (These would ideally be in a common folder) ---

const AuthLayout = ({ title, children }) => (
  <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4">
    <div className="w-full max-w-md">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="bg-primary p-2 rounded-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">DevFlow</h1>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 text-center">{title}</h2>
        {children}
      </div>
    </div>
  </div>
);

const InputField = ({ label, type, placeholder, id, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
    />
  </div>
);

const AuthButton = ({ children, type = "submit" }) => (
  <button type={type} className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all">
    {children}
  </button>
);


/**
 * ==============================================================================
 * FILE: /client/src/pages/auth/ForgotPasswordPage.jsx
 * PURPOSE: The page for users to request a password reset link.
 * ==============================================================================
 */
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      // In a real app, you would make an API call here:
      // await authApi.forgotPassword({ email });
      setMessage('If an account with that email exists, a password reset link has been sent.');
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
      console.error("Forgot password failed:", err);
    }
  };

  return (
    <AuthLayout title="Reset Your Password">
      <p className="text-center text-sm text-gray-500 mt-4">
        Enter your email address and we will send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <InputField 
          id="email" 
          label="Email Address" 
          type="email" 
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {message && <p className="text-sm text-green-600 text-center">{message}</p>}
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <div>
          <AuthButton>Send Reset Link</AuthButton>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Remember your password?{' '}
        <Link to="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
