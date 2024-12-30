import React, { useEffect, useState } from "react";
import styles from "./styles/Search.module.css";

const Search = ({ setFoodData }) => {
  const [query, setQuery] = useState("Pizza");
  const [searchTrigger, setSearchTrigger] = useState(false); // State to trigger useEffect
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API = "bf4f205f1159426f8137d375317396a9";

  useEffect(() => {
    if (!searchTrigger) return; // Prevent fetch on initial render
    const getData = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    getData();
    setSearchTrigger(false); // Reset the trigger after fetching data
  }, [searchTrigger]);

  const handleSearch = () => {
    setSearchTrigger(true); // Trigger useEffect
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
};

export default Search;
