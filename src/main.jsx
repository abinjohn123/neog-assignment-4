import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { makeServer } from './server';
import App from './App.jsx';
import './index.css';

import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';

makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <Router>
          <App />
        </Router>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);
