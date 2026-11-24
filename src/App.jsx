
import React, { useEffect, useState } from "react";
import Foodcard from "./Foodcard";
import "./App.css";

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => setFoods(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <header>
        <h1>🍔 Foodie's Kitchen</h1>
        <p>Delicious food delivered to your door</p>
      </header>

      <h2 className="title">Our Food Menu</h2>

      {loading ? (
        <h3 className="message">Loading food menu...</h3>
      ) : foods.length === 0 ? (
        <h3 className="message">No food items found!</h3>
      ) : (
        <div className="food-container">
          {foods.map(food => (
            <Foodcard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
