import React, { useState, useEffect } from "react";
import styles from "./styles/FoodDetails.module.css";
import ItemList from "./ItemList";

const FoodDetail = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API = "bf4f205f1159426f8137d375317396a9";
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?apiKey=${API}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    };
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <div>Food Detail: {foodId}</div>

        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            💵{" "}
            <strong>
              ${(food.pricePerServing / 100).toFixed(2)} Per serving
            </strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} loading={loading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {loading ? (
              <p>Is Loading</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
