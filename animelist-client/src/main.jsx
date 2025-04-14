import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import WatchlistProvider from './context/WatchlistContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchlistProvider>
        <App />
      </WatchlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);
