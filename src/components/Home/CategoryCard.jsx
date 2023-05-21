export const CategoryCard = ({ category }) => {
  console.log(category);
  return (
    <div className="category-card">
      <h3 className="name">{category.categoryName}</h3>
      <p className="description">
        <em>{category.description}</em>
      </p>
    </div>
  );
};
