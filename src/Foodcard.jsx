
function Foodcard({ food }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />

      <div className="food-info">
        <h3>{food.name}</h3>
        <p className="category">{food.category}</p>
        <p>{food.description}</p>

        <div className="bottom">
          <h3>₹{food.price}</h3>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Foodcard;
