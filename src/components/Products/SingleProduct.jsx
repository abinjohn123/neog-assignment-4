import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from './useProducts';
import { useCartWishlist } from './useCartWishlist';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useAuthContext } from '../../contexts/AuthContext';

const DiscountStripe = ({ price }) => {
  const originalPrice = Number(price) + 1500;

  const discount = Math.floor(
    ((originalPrice - Number(price)) * 100) / Number(price)
  );
  return (
    <div className="product-price">
      <span className="original-price">₹{Number(price) + 150}</span>{' '}
      <span className="discount">({discount}% off)</span>
    </div>
  );
};

const SingleProduct = () => {
  const { fetchProduct, isLoading, product } = useProducts();
  const { isLoggedIn } = useAuthContext();
  const { productId = '' } = useParams();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { addToCart, addToWishlist, removeFromWishlist } = useCartWishlist();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    addToCart({ product });
  };

  const handleWishlistClick = () => {
    wishlist.find((items) => items._id === product._id)
      ? removeFromWishlist(productId)
      : addToWishlist({ product });
  };

  useEffect(() => fetchProduct(productId), []);

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <div className="layout">
      <div className="product">
        <img
          className="product-image"
          src="https://placehold.co/600x400"
          alt="placeholder-image"
        />
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <div className="d-flex price-container">
            <p className="product-price">₹{product.price}</p>
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
    </div>
  );
};

export default SingleProduct;
