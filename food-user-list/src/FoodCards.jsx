import FoodCard from "./FoodCard";

function FoodCards({ foods }) {
  return (
    <div className="cards">
      {foods.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}
    </div>
  );
}

export default FoodCards;
