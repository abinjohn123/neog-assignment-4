import { useNavigate } from 'react-router-dom';

export const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      onClick={() =>
        navigate('/products', { state: { category: category.categoryName } })
      }
    >
      <h3 className="name">{category.categoryName}</h3>
      <p className="description">
        <em>{category.description}</em>
      </p>
    </div>
  );
};
