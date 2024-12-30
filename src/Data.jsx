import React, { useEffect } from "react";

const Data = ({ setFoodData }) => {
  useEffect(() => {
    setFoodData([
      // Initialize with your foodData
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
      // More food data...
    ]);
  }, [setFoodData]);
};

export default Data;
