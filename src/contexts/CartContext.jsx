import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const contextValue = { cart, setCart };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
