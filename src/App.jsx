import FoodList from "./Components/FoodList";
import Search from "./Components/Search";
import React, { useState } from "react";
import Nav from "./Components/Nav";
import "./App.css";
function App() {
  const [foodData, setFoodData] = useState([
    {
      id: 658615,
      title: "Roasted Peppers, Spinach & Feta Pizza",
      image: "https://img.spoonacular.com/recipes/658615-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 658920,
      title: "Rustic Grilled Peaches Pizza",
      image: "https://img.spoonacular.com/recipes/658920-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 656329,
      title: "Pizza bites with pumpkin",
      image: "https://img.spoonacular.com/recipes/656329-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 680975,
      title: "BLT Pizza",
      image: "https://img.spoonacular.com/recipes/680975-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716300,
      title: "Plantain Pizza",
      image: "https://img.spoonacular.com/recipes/716300-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 665769,
      title: "Zucchini Pizza Boats",
      image: "https://img.spoonacular.com/recipes/665769-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 655698,
      title: "Pepperoni Pizza Muffins",
      image: "https://img.spoonacular.com/recipes/655698-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 641893,
      title: "Easy Cheesy Pizza Casserole",
      image: "https://img.spoonacular.com/recipes/641893-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 654523,
      title: "Paneer & Fig Pizza",
      image: "https://img.spoonacular.com/recipes/654523-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 655847,
      title: "Pesto Veggie Pizza",
      image: "https://img.spoonacular.com/recipes/655847-312x231.jpg",
      imageType: "jpg",
    },
  ]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
