import { useContext } from 'react';
import { SocketContext } from '../context/SocketProvider'; // Make sure this path is correct

/**
 * ==============================================================================
 * FILE: /client/src/hooks/useSocket.js
 * PURPOSE: A custom hook to provide easy access to the Socket.IO context.
 *
 * HOW IT WORKS:
 * This hook allows any component to easily access the connected socket instance
 * to send or listen for real-time events, without needing to manage the
 * connection itself.
 * ==============================================================================
 */
const useSocket = () => {
  const context = useContext(SocketContext);

  // This check ensures that components using this hook are wrapped by the SocketProvider.
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }

  return context;
};

export default useSocket;
