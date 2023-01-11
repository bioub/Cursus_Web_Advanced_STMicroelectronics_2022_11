// TODO utiliser les modules CSS si possible
import './Products.css';
import { Component } from 'react';
import { Doc, fetchProducts } from '../api/products';
import { Link } from 'react-router-dom';

type ProductsProps = {};
type ProductsState = {
  products: Doc[];
};

class Products extends Component<ProductsProps, ProductsState> {
  state: Readonly<ProductsState> = {
    products: [],
  };

  async componentDidMount() {
    const products = await fetchProducts();
    this.setState({
      products,
    });
  }

  render() {
    return (
      <table className="Products">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Additionnal Features</th>
          <th>Actions</th>
        </tr>
        {this.state.products.map((product) => (
          <tr>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.additionalFeatures}</td>
            <td>
              <Link to={'/products/' + product._id}>Show</Link>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Products;
