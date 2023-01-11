import { Link } from 'react-router-dom';
import styles from './Menu.module.css';


function Menu() {
  return (
    <div className={styles.host}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/search">Search</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Menu;
