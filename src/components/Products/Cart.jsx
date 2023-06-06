import { useEffect } from 'react';
import { useCartWishlist } from './useCartWishlist';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { DiscountStripe } from '../shared/DiscountStripe';

import './cart.css';

const CartItemCard = ({ item }) => {
  const {
    updateCartQuantity,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
  } = useCartWishlist();
  const { wishlist } = useWishlist();

  const handleQuantityClick = (action) => {
    updateCartQuantity(item._id, action);
  };
  const handleRemoveClick = () => {
    console.log('REM');
    removeFromCart(item._id);
  };

  const handleWishlistClick = () => {
    wishlist.find((wishlistItem) => wishlistItem._id === item._id)
      ? removeFromWishlist(item._id)
      : addToWishlist({ product: item });
  };

  return (
    <div className="cart-item">
      <div className="image-container">
        <img src="https://placehold.co/120x100"></img>
      </div>
      <div className="item-details">
        <div className="item-header">
          <p>{item.title}</p>
          <div className="remove-btn" onClick={handleRemoveClick}>
            REMOVE
          </div>
        </div>
        <div className="d-flex price-container">
          <p className="price">₹{item.price}</p>
          <DiscountStripe price={item.price} />
        </div>
        <div className="bottom-strip">
          <div className="quantity">
            <div
              className="cart-icon d-flex"
              onClick={() => handleQuantityClick('decrement')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </div>
            <p>Quantity: {item.qty}</p>
            <div
              className="cart-icon d-flex"
              onClick={() => handleQuantityClick('increment')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <button
            className="product-btn-wishlist"
            onClick={handleWishlistClick}
          >
            {wishlist.find((wishlistItem) => wishlistItem._id === item._id)
              ? 'Remove from wishlist'
              : 'Add to wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { getCart, isLoading } = useCartWishlist();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  console.log(cart);

  const getTotalPrice = () =>
    cart.reduce(
      (total, item) =>
        total +
        Number.parseFloat(item.qty, 10) * Number.parseFloat(item.price, 10),
      0
    );

  useEffect(getCart, []);
  if (isLoading) return <h3>Loading....</h3>;
  if (cart.length === 0) return <h3>No items in cart!</h3>;
  return (
    <>
      <h2 className="section-heading">Cart</h2>
      <div className="cart">
        <div className="cart-items">
          {cart.map((cartItem) => (
            <CartItemCard key={cartItem._id} item={cartItem} />
          ))}
        </div>
        <div className="cart-summary">
          <div className="item-total">
            <p>Item total</p>
            <p>₹{getTotalPrice()}</p>
          </div>
          <div className="delivery-fee">
            <p>Delivery Fee</p>
            <p>FREE</p>
          </div>
          <div className="separator"></div>
          <div className="grand-total">
            <p>Grand total</p>
            <p>₹{getTotalPrice()}</p>
          </div>
          <button className="btn-checkout">Proceed to checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
