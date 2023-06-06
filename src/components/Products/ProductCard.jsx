import { useNavigate } from 'react-router-dom';
import { useCartWishlist } from './useCartWishlist';

import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useAuthContext } from '../../contexts/AuthContext';

export const ProductCard = ({ product }) => {
  const {
    isLoading: isCartWishlistLoading,
    getCart,
    addToCart,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
  } = useCartWishlist();

  const { isLoggedIn } = useAuthContext();
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    addToCart({ product });
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    wishlist.find((items) => items._id === product._id)
      ? removeFromWishlist(product._id)
      : addToWishlist({ product });
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <div className="image">
        <img src="https://placehold.co/160x100" alt="placeholder-image" />
      </div>
      <div className="name">{product.title}</div>
      <div className="d-flex brand-price">
        <p className="brand">{product.brand}</p>
        <p className="price">₹{product.price}</p>
      </div>
      <div className="actions">
        {cart.find((items) => items._id === product._id) ? (
          <button
            className="btn-cart --added"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/cart');
            }}
          >
            Go to cart
          </button>
        ) : (
          <button className="btn-cart" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
        <button
          className={`btn-wishlist ${
            wishlist.find((items) => items._id === product._id) ? '--added' : ''
          }`}
          onClick={handleWishlistClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="wishlist-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
