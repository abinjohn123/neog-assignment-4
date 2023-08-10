import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useProducts } from './useProducts';
import { useCartWishlist } from './useCartWishlist';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { DiscountStripe } from '../shared/DiscountStripe';

const SingleProduct = () => {
  const { fetchProduct, isLoading, product } = useProducts();
  const { isLoggedIn } = useAuthContext();
  const { productId = '' } = useParams();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { addToCart, addToWishlist, removeFromWishlist } = useCartWishlist();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (e) => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: location } });

      return;
    }

    addToCart({ product });
  };

  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: location } });

      return;
    }

    wishlist.find((items) => items._id === product._id)
      ? removeFromWishlist(productId)
      : addToWishlist({ product });
  };

  useEffect(() => fetchProduct(productId), []);

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <>
      <div className="product">
        <img
          className="product-image"
          src="https://placehold.co/600x400"
          alt="placeholder-image"
        />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <div className="d-flex price-container product-price">
            <p>₹{product.price}</p>
            <DiscountStripe price={product.price} />
          </div>
          <p className="product-brand">
            {product.brand} - {product.categoryName}
          </p>
          <div className="action-btns">
            <button
              className="product-btn-cart"
              onClick={() =>
                cart.find((item) => item._id === product._id)
                  ? navigate('/cart')
                  : handleAddToCart()
              }
            >
              {cart.find((item) => item._id === product._id)
                ? 'Go to cart'
                : ' Add to cart'}
            </button>
            <button
              className="product-btn-wishlist"
              onClick={handleWishlistClick}
            >
              {wishlist.find((item) => item._id === product._id)
                ? 'Remove from wishlist'
                : 'Add to wishlist'}
            </button>
          </div>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
