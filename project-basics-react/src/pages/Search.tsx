// TODO utiliser les modules CSS si possible
import './Search.css';
import { Component } from "react";
import ButtonLink from '../ui/ButtonLink';

class Search extends Component {
  render() {
    return <form className="Search">
    <div className="form-row">
      <h3>Name</h3>
      <input type="text" name="name" />
    </div>
    <div className="form-row">
      <h3>FM Radio</h3>
      <label>
        <input type="radio" name="fmRadio" value="yes" />
        Yes
      </label>
      <label>
        <input type="radio" name="fmRadio" value="no" />
        No
      </label>
      <label>
        <input type="radio" name="fmRadio" value="whatever" checked />
        Whatever
      </label>
    </div>
    <div className="form-row">
      <h3>Availability</h3>
      <label>
        <input type="checkbox" name="availability" value="T-Mobile" />
        T-Mobile
      </label>
      <label>
        <input type="checkbox" name="availability" value="Verizon" />
        Verizon
      </label>
    </div>
    <ButtonLink href="products.html">Search</ButtonLink>
  </form>;
  }
}

export default Search;
