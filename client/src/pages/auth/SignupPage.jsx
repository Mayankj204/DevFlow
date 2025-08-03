import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; // We will add the signup function to this hook's context

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
 * FILE: /client/src/pages/auth/SignupPage.jsx
 * PURPOSE: The user registration page with form handling and API integration.
 * ==============================================================================
 */
const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth(); // We will add this function to AuthProvider next
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Call the signup function from AuthContext
      await signup(name, email, password);
      // On success, navigate to the dashboard
      navigate('/');
    } catch (err) {
      // If the API call fails, display an error message
      setError('Failed to create an account. The email might already be in use.');
      console.error("Signup failed:", err);
    }
  };

  return (
    <AuthLayout title="Create an Account">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <InputField 
          id="fullName" 
          label="Full Name" 
          type="text" 
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          placeholder="Minimum 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <div>
          <AuthButton>Create Account</AuthButton>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignupPage;
