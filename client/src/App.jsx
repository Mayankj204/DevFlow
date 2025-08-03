import React from 'react';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthProvider';
import { SocketProvider } from './context/SocketProvider';

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;
