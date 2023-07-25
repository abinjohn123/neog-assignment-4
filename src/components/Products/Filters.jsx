import { useEffect, useState } from 'react';

const CATEGORY_MAPPING = {
  0: '75%',
  1: 'TKL',
  2: 'Full Size',
};

const Filters = ({
  setFilteredProducts,
  products = [],
  filteredProducts = [],
  initialCategory = '',
}) => {
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : Object.values(CATEGORY_MAPPING)
  );
  const [sortingKey, setSortingKey] = useState(0);
  const [rating, setRating] = useState(0);
  const [searchInput, setSearchInput] = useState('');

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

  const resetFilters = () => {
    setSelectedCategories(Object.values(CATEGORY_MAPPING));
    setSortingKey(0);
    setRating(0);
    setSearchInput('');
  };

  useEffect(() => {
    const copyOfProducts = [...products];

    if (sortingKey)
      copyOfProducts.sort((a, b) => sortingKey * (a.price - b.price));

    setFilteredProducts(
      copyOfProducts
        .filter((item) => {
          if (!searchInput) return item;

          return item.title
            .toLowerCase()
            .includes(searchInput.toLowerCase().trim());
        })
        .filter((item) => {
          if (
            selectedCategories.length === Object.keys(CATEGORY_MAPPING).length
          )
            return item;

          return selectedCategories.includes(item.categoryName);
        })
        .filter((item) => {
          if (rating === 0) return item;
          return item.rating === rating;
        })
    );
  }, [products, selectedCategories, sortingKey, rating, searchInput]);

  return (
    <div className="filters">
      <div className="filters-header d-flex">
        <h2>Filters</h2>
        {(filteredProducts.length !== products.length || sortingKey !== 0) && (
          <button onClick={resetFilters}>clear</button>
        )}
      </div>

      <div className="filter-group">
        <h3 className="filter-label">Search product</h3>
        <input
          type="text"
          className="search-filter"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="type Keychron..."
        />
      </div>

      <div className="filter-group">
        <h3 className="filter-label">Sort by price</h3>
        <div onChange={handleSortByPrice} className="price-filters">
          <label>
            <input
              type="radio"
              value={-1}
              name="price"
              checked={sortingKey === -1}
            />
            High to Low
          </label>
          <label>
            <input
              type="radio"
              value={1}
              name="price"
              checked={sortingKey === 1}
            />{' '}
            Low to High
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
          <span>all</span>
          <input type="range" min="0" max="5" id="myRange" value={rating} />
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
