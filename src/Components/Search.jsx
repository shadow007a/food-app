import React, { useEffect, useState } from "react";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("Pizza");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API = "bf4f205f1159426f8137d375317396a9";
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    };
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
