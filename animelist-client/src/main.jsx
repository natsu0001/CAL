import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { WatchlistProvider } from './context/WatchlistContext';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> 
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
