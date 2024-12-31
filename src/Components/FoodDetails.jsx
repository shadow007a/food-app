import React, { useState, useEffect } from "react";

const FoodDetail = ({ foodId }) => {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API = "bf4f205f1159426f8137d375317396a9";
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?apiKey=${API}`);
      const data = await res.json();
      setFood(data);
    };
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>Food Detail: {foodId}</div>
      <h1>{food.title}</h1>
      <img src={food.image} alt={food.title} />
    </div>
  );
};

export default FoodDetail;
