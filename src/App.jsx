import FoodList from "./Components/FoodList";
import Search from "./Components/Search";
import React, { useState } from "react";
import Nav from "./Components/Nav";
import "./Components/styles/App.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import Data from "./Data";
import FoodDetails from "./Components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div className="App">
      <Data setFoodData={setFoodData} />
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
