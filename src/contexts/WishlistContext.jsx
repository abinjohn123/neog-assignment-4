import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext([]);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const contextValue = { wishlist, setWishlist };

  useEffect(() => {
    console.log(wishlist);
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
