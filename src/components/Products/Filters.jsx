import { useEffect, useState } from 'react';

const CATEGORY_MAPPING = {
  0: '75%',
  1: 'TKL',
  2: 'Full size',
};

const Filters = ({ setFilteredProducts, products = [] }) => {
  const [selectedCategories, setSelectedCategories] = useState(
    Object.values(CATEGORY_MAPPING)
  );
  const [sortingKey, setSortingKey] = useState(0);
  const [rating, setRating] = useState(-1);

  const handleSortByPrice = (e) => {
    setSortingKey(Number(e.target.value));
  };

  const handleCategoriesSelect = (e) => {
    const { value } = e.target;

    setSelectedCategories((categories) => {
      if (categories.includes(CATEGORY_MAPPING[Number(value)]))
        return categories.filter(
          (id) => id !== CATEGORY_MAPPING[Number(value)]
        );

      return [...categories, CATEGORY_MAPPING[Number(value)]];
    });
  };

  const handleRatingChange = (e) => setRating(Number(e.target.value));

  useEffect(() => {
    const copyOfProducts = [...products];

    if (sortingKey)
      copyOfProducts.sort((a, b) => sortingKey * (a.price - b.price));

    setFilteredProducts(
      copyOfProducts
        .filter((item) => {
          if (
            selectedCategories.length === Object.keys(CATEGORY_MAPPING).length
          )
            return item;

          return selectedCategories.includes(item.categoryName);
        })
        .filter((item) => {
          if (rating === -1) return item;
          return item.rating === rating;
        })
    );
  }, [selectedCategories, sortingKey, rating]);

  return (
    <div className="filters">
      <h2>Filters</h2>

      <div className="filter-group">
        <h3 className="filter-label">Sort by price</h3>
        <div onChange={handleSortByPrice} className="price-filters">
          <label>
            <input type="radio" value={-1} name="price" /> High to Low
          </label>
          <label>
            <input type="radio" value={1} name="price" /> Low to High
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h3 className="filter-label">Categories</h3>
        <div onChange={handleCategoriesSelect} className="price-filters">
          <label>
            <input
              type="checkbox"
              value={0}
              name="category"
              checked={selectedCategories.includes(CATEGORY_MAPPING[0])}
            />
            75%
          </label>
          <label>
            <input
              type="checkbox"
              value={1}
              name="category"
              checked={selectedCategories.includes(CATEGORY_MAPPING[1])}
            />
            TKL
          </label>
          <label>
            <input
              type="checkbox"
              value={2}
              name="category"
              checked={selectedCategories.includes(CATEGORY_MAPPING[2])}
            />{' '}
            Full-Size
          </label>
        </div>
      </div>
      <div className="filter-group">
        <h3 className="filter-label">Ratings</h3>
        <div onChange={handleRatingChange} className="range-filter">
          <span>1</span>
          <input type="range" min="1" max="5" id="myRange" />
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
