import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider'; // Make sure this path is correct

/**
 * ==============================================================================
 * FILE: /client/src/hooks/useAuth.js
 * PURPOSE: A custom hook to provide easy access to the authentication context.
 *
 * HOW IT WORKS:
 * Instead of importing `useContext` and `AuthContext` in every component that
 * needs user data, you can simply import and use this hook. It's a cleaner
 * and more convenient way to consume the context.
 * ==============================================================================
 */
const useAuth = () => {
  const context = useContext(AuthContext);

  // This is a good practice to ensure the hook is used within an AuthProvider.
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;
