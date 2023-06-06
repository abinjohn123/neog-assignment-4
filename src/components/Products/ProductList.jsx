import { useEffect, useState } from 'react';

import { ProductCard } from './ProductCard';
import { useProducts } from './useProducts';
import { useCartWishlist } from './useCartWishlist';
import { useAuthContext } from '../../contexts/AuthContext';

const ProductList = () => {
  const { isLoggedIn } = useAuthContext;
  const { products, isLoading, fetchAllProducts } = useProducts();
  const { getCart, getWishlist } = useCartWishlist();

  useEffect(() => {
    fetchAllProducts();

    if (isLoggedIn) {
      getCart();
      getWishlist();
    }
  }, [isLoggedIn]);

  return (
    <div className="products-listing">
      <div className="filters">
        <h4>Filters</h4>
      </div>
      <div className="products">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h4>Showing all products</h4>
            <div className="products-container">
              {products.length === 0 && (
                <p>Products didn't load! Please try again in some time</p>
              )}
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
