import React, { createContext, useState, useEffect } from 'react';
import api from '../api/api'; // Your configured Axios instance
import authApi from '../api/auth.api'; // Import the authApi functions

// Create the context that components will consume
export const AuthContext = createContext(null);

/**
 * ==============================================================================
 * FILE: /client/src/context/AuthProvider.jsx
 * PURPOSE: Manages global authentication state.
 * (UPDATED to include the signup function)
 * ==============================================================================
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const verifyToken = async () => {
        try {
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          const response = await authApi.getCurrentUser();
          setUser(response.data);
        } catch (error) {
          console.error("Token verification failed:", error);
          localStorage.removeItem('token');
        }
      };
      verifyToken();
    }
    setLoading(false);
  }, []);

  // --- Authentication Functions ---

  const login = async (email, password) => {
    try {
      const response = await authApi.login({ email, password });
      const { token, ...userData } = response.data;
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(userData);
      return userData;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      // Make a real API call to the backend's signup endpoint
      const response = await authApi.signup({ name, email, password });
      
      const { token, ...userData } = response.data;

      // After a successful signup, automatically log the user in
      localStorage.setItem('token', token);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(userData);
      
      return userData;
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
    window.location.href = '/login';
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    signup, // Add the signup function to the context value
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
