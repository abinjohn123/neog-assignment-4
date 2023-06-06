export const DiscountStripe = ({ price }) => {
  const originalPrice = Number(price) + 1500;

  const discount = Math.floor(
    ((originalPrice - Number(price)) * 100) / Number(price)
  );
  return (
    <div>
      <span className="original-price">₹{Number(price) + 150}</span>{' '}
      <span className="discount">({discount}% off)</span>
    </div>
  );
};
