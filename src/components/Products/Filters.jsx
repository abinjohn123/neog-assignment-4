const noop = () => {};

const Filters = ({ setFilteredProducts, products = [] }) => {
  const handleSortByPrice = (e) => {
    const sortingKey = Number(e.target.value);
    setFilteredProducts((items) => [
      ...items.sort((a, b) => sortingKey * (a.price - b.price)),
    ]);
  };

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
    </div>
  );
};

export default Filters;
