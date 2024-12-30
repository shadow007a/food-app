import styles from "./styles/Container.module.css";
const Container = ({ children }) => {
  return <div className={styles.parentContainer}>{children}</div>;
};

export default Container;
