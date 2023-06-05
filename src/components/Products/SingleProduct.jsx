import { useParams } from 'react-router-dom';
import { useProducts } from './useProducts';
import { useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

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
  const { productId = '' } = useParams();
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  useEffect(() => fetchProduct(productId), []);

  const handleAddToCart = () => {};
  const handleWishlistClick = () => {};

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
                cart.includes(product._id)
                  ? navigate('./cart')
                  : handleAddToCart()
              }
            >
              {cart.includes(product._id) ? 'Go to cart' : ' Add to cart'}
            </button>
            <button
              className="product-btn-wishlist"
              onClick={handleWishlistClick}
            >
              {wishlist.includes(product._id)
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
