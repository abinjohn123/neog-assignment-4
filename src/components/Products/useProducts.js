import { useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllProducts = () => {
    setIsLoading(true);
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const fetchProduct = (uuid) => {
    setIsLoading(true);
    fetch(`/api/products/${uuid}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return {
    products,
    setProducts,
    product,
    setProduct,
    isLoading,
    setIsLoading,
    fetchAllProducts,
    fetchProduct,
  };
};

export { useProducts };
