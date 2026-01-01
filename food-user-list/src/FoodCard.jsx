function FoodCard({ food }) {
  return (
    <div className="card">
      <img src={food.img} alt={food.name} />

      <div className="card-body">
        <h3>{food.name}</h3>
        <p className="price">Rs {food.price}</p>
      </div>
    </div>
  );
}

export default FoodCard;
