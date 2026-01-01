import FoodCards from "./FoodCards";
import "./App.css";

function App() {
  const foods = [
    { name: "Sandwich", price: 250, img: "/food/sandwich.jpg" },
    { name: "Mexican Tacos", price: 450, img: "/food/tacos.jpg" },
    { name: "Drinks", price: 150, img: "/food/drink.jpg" },
    { name: "Cheese Burger", price: 250, img: "/food/burger.jpg" },
    { name: "Hotdog", price: 250, img: "/food/hotdog.jpg" },
    { name: "Pizza", price: 350, img: "/food/pizza.jpg" },
    { name: "Chicken Nuggets", price: 450, img: "/food/nuggets.jpg" },
    { name: "French Fries", price: 200, img: "/food/fries.jpg" },
    { name: "Coffee", price: 150, img: "/food/coffee.jpg" },
    { name: "Donuts", price: 150, img: "/food/donuts.jpg" },
  ];

  return (
    <div className="app">
      <h1>Fast Food Menu</h1>
      <FoodCards foods={foods} />
    </div>
  );
}

export default App;
