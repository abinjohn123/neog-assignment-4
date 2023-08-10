import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext([]);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const contextValue = { wishlist, setWishlist };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
