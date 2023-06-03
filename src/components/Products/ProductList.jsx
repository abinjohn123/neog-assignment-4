import { useEffect, useState } from 'react';

import { ProductCard } from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    console.log(products);
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
