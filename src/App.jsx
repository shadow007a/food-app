import FoodList from "./Components/FoodList";
import Search from "./Components/Search";
import React, { useState } from "react";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import Data from "./Data";
function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Data setFoodData={setFoodData} />
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
