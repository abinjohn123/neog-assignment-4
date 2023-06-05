import { useEffect, useState } from 'react';

import { ProductCard } from './ProductCard';
import { useProducts } from './useProducts';

const ProductList = () => {
  const { products, setProducts, isLoading, fetchAllProducts } = useProducts();

  useEffect(() => {
    fetchAllProducts();
  }, []);

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
