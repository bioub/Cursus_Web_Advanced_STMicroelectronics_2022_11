// TODO utiliser les modules CSS si possible
import './ProductDetails.css';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Doc, fetchProducts } from '../api/products';

type Props = RouteComponentProps<{ productId: string }>;
type State = {
  product?: Doc;
};

class ProductDetails extends Component<Props, State> {
  state: Readonly<State> = {};

  async componentDidMount() {
    const products = await fetchProducts();

    const productId = this.props.match.params.productId;
    const product = products.find((p) => p._id === productId);

    // TODO faire quelque chose si le produit n'est pas trouvé

    this.setState({
      product,
    });
  }

  render() {
    if (!this.state.product) {
      return <div className="ProductDetails">Loading...</div>;
    }

    return (
      <div className="ProductDetails">
        <div className="phone-image">
          <img className="phone" src={'/' + this.state.product.images[0]} />
        </div>
        <h1>{this.state.product.name}</h1>
        <p>{this.state.product.description}</p>
        <ul className="phone-thumbs">
          {this.state.product.images.map((img) => (
            <li>
              <img key={img} src={'/' + img} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductDetails;
