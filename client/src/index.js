/*
================================================================================
FILE: /client/src/index.js
PURPOSE: The absolute entry point of the React application. It renders the App
component into the DOM.
================================================================================
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Correct path to the styles folder
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
