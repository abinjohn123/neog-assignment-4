import { useState } from 'react';
import { useSnackbar } from 'notistack';

import { useAuthContext } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const useCartWishlist = () => {
  const { token } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const { setCart } = useCart();
  const { setWishlist } = useWishlist();
  const [isLoading, setIsLoading] = useState(false);

  const getCart = () => {
    setIsLoading(true);
    fetch('/api/user/cart', {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setCart(data.cart))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const addToCart = (payload) => {
    setIsLoading(true);
    fetch('/api/user/cart', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        enqueueSnackbar('Added to cart!');
      })
      .catch((err) => console.log(err))
      .finally(() => {
        getCart();
        setIsLoading(false);
      });
  };

  const removeFromCart = (productId) => {
    setIsLoading(true);
    fetch(`/api/user/cart/${productId}`, {
      method: 'DELETE',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        enqueueSnackbar('Removed from cart!');
      })
      .catch((err) => console.log(err))
      .finally(() => {
        getCart();
        setIsLoading(false);
      });
  };

  const updateCartQuantity = (productId, type = 'increment') => {
    setIsLoading(true);
    fetch(`/api/user/cart/${productId}`, {
      method: 'POST',
      body: JSON.stringify({ action: { type } }),
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        enqueueSnackbar('Cart quantity updated!');
        if (data.cart.find((items) => items._id === productId)?.qty === 0)
          return removeFromCart(productId);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        getCart();
        setIsLoading(false);
      });
  };

  const getWishlist = () => {
    setIsLoading(true);
    fetch('/api/user/wishlist', {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setWishlist(data.wishlist))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const addToWishlist = (payload) => {
    setIsLoading(true);
    fetch('/api/user/wishlist', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        enqueueSnackbar('Added to wishlist!');
      })
      .catch((err) => console.log(err))
      .finally(() => {
        getWishlist();
        setIsLoading(false);
      });
  };

  const removeFromWishlist = (productId) => {
    setIsLoading(true);
    fetch(`/api/user/wishlist/${productId}`, {
      method: 'DELETE',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        enqueueSnackbar('Removed from wishlist!');
      })
      .catch((err) => console.log(err))
      .finally(() => {
        getWishlist();
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    getCart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
  };
};

export { useCartWishlist };
