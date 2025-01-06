import Item from "./item";

const ItemList = ({ food, loading }) => {
  return (
    <div>
      <div>
        {loading ? (
          <p>Is Loading</p>
        ) : (
          food.extendedIngredients.map((ingredient) => (
            <Item ingredient={ingredient} />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
