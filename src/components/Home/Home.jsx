import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoryCard } from './CategoryCard';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="home">
      <div className="home-banner">
        <h1 className="home-title">KeyBros.inc</h1>
        <p className="home-description">
          Elevate Your Typing Experience: Find Your Perfect Mechanical Keyboard
        </p>
      </div>
      <div className="categories">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
        <div
          className="view-all"
          onClick={() => {
            navigate('./products');
          }}
        >
          View all products{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="home-featured">
        <h3>Our buyers love us!</h3>
        <div className="home-featured-review">
          <p className="review">
            Vast selection, seamless navigation, and a user-friendly experience!
            Keybros is every keyboard enthusiast's dream!
          </p>
          <p className="author">John Sandoe</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
