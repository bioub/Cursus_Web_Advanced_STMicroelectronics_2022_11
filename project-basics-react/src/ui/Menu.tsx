import styles from './Menu.module.css';


function Menu() {
  return (
    <div className={styles.host}>
      <a href="#/">Home</a>
      <a href="#/products">Products</a>
      <a href="#/search">Search</a>
      <a href="#/about">About</a>
    </div>
  );
}

export default Menu;
