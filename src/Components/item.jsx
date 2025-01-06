import styles from "./styles/item.module.css";
const Item = ({ ingredient }) => {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
            alt=""
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{ingredient.name}</div>
          <div className={styles.amount}>
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
