import { useEffect } from 'react';
import { useCartWishlist } from './useCartWishlist';

const Cart = () => {
  const { getCart, cart } = useCartWishlist();

  useEffect(getCart, []);
  return <h2>This is cart</h2>;
};

export default Cart;
