import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ProductCard } from './ProductCard';
import { useProducts } from './useProducts';
import { useCartWishlist } from './useCartWishlist';
import { useAuthContext } from '../../contexts/AuthContext';
import Filters from './Filters';

const ProductList = () => {
  const { isLoggedIn } = useAuthContext;
  const { products, isLoading, fetchAllProducts } = useProducts();
  const { getCart, getWishlist } = useCartWishlist();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const initialCategory = location?.state?.category;

  useEffect(() => {
    fetchAllProducts();

    if (isLoggedIn) {
      getCart();
      getWishlist();
    }
  }, [isLoggedIn]);

  return (
    <div className="products-listing">
      <Filters
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
        products={products}
        initialCategory={initialCategory}
      />

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
              {filteredProducts.length === 0 ? (
                <p>
                  No Products found. <br /> Please try another filter
                </p>
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
