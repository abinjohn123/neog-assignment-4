import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { makeServer } from './server';
import App from './App.jsx';
import './index.css';

import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { AuthProvider } from './contexts/AuthContext';

makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={2000}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <App />
            </Router>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
