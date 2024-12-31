import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  return foodData.map((food) => (
    <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
  ));
};

export default FoodList;
