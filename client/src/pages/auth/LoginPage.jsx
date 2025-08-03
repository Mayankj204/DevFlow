import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; // Import the custom hook

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
 * FILE: /client/src/pages/auth/LoginPage.jsx
 * PURPOSE: The user login page, now with form handling and API integration.
 * ==============================================================================
 */
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold login errors
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine where to redirect after login
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      // Call the login function from AuthContext, which now makes a real API call
      await login(email, password);
      // On success, navigate to the intended page or the dashboard
      navigate(from, { replace: true });
    } catch (err) {
      // If the API call fails, display an error message
      setError('Failed to log in. Please check your credentials.');
      console.error("Login failed:", err);
    }
  };

  return (
    <AuthLayout title="Welcome Back!">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <InputField 
          id="email" 
          label="Email Address" 
          type="email" 
          placeholder="you@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField 
          id="password" 
          label="Password" 
          type="password" 
          placeholder="••••••••" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
            <label htmlFor="remember-me" className="ml-2 block text-gray-900">Remember me</label>
          </div>
          <Link to="/forgot-password" className="font-medium text-primary hover:underline">Forgot your password?</Link>
        </div>

        <div>
          <AuthButton>Sign In</AuthButton>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Not a member?{' '}
        <Link to="/signup" className="font-medium text-primary hover:underline">
          Sign up now
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
