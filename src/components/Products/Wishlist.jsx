import { useEffect } from 'react';
import { useCartWishlist } from './useCartWishlist';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { DiscountStripe } from '../shared/DiscountStripe';

import './cart.css';

const CartItemCard = ({ product }) => {
  const { updateCartQuantity, addToCart, removeFromWishlist } =
    useCartWishlist();
  const { cart } = useCart();

  const handleRemoveClick = () => {
    removeFromWishlist(product._id);
  };

  const handleCartBtnClick = () => {
    cart.find((wishlistItem) => wishlistItem._id === product._id)
      ? updateCartQuantity(product._id)
      : addToCart({ product });
  };

  return (
    <div className="cart-item">
      <div className="image-container">
        <img src="https://placehold.co/120x100"></img>
      </div>
      <div className="item-details">
        <div className="item-header">
          <p>{product.title}</p>
          <div className="remove-btn" onClick={handleRemoveClick}>
            REMOVE
          </div>
        </div>
        <div className="d-flex price-container">
          <p className="price">₹{product.price}</p>
          <DiscountStripe price={product.price} />
        </div>
        <div className="bottom-strip">
          <button className="product-btn-wishlist" onClick={handleCartBtnClick}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Wishlist = () => {
  const { getWishlist, isLoading } = useCartWishlist();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const getTotalPrice = () =>
    cart.reduce(
      (total, item) =>
        total +
        Number.parseFloat(item.qty, 10) * Number.parseFloat(item.price, 10),
      0
    );

  useEffect(getWishlist, []);
  if (isLoading) return <h3>Loading....</h3>;
  if (wishlist.length === 0) return <h3>No items in wishlist!</h3>;
  return (
    <>
      <h2 className="section-heading">Wishlist</h2>
      <div className="cart">
        <div className="cart-items">
          {wishlist.map((cartItem) => (
            <CartItemCard key={cartItem._id} product={cartItem} />
          ))}
        </div>
        {/* <div className="cart-summary">
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
        </div> */}
      </div>
    </>
  );
};

export default Wishlist;
