// TODO utiliser les modules CSS si possible
import './Products.css';
import { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <table className="Products">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Additionnal Features</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>dell-streak-7</td>
          <td>Dell Streak 7</td>
          <td>Front Facing 1.3MP Camera</td>
          <td>
            <a href="product-details.html">Show</a>
          </td>
        </tr>
        <tr>
          <td>dell-venue</td>
          <td>Dell Venue</td>
          <td>Gorilla Glass display, Dedicated Camera Key, Ring Silence Switch, Swype keyboard.</td>
          <td>
            <a href="product-details.html">Show</a>
          </td>
        </tr>
        <tr>
          <td>droid-2-global-by-motorola</td>
          <td>DROID™ 2 Global by Motorola</td>
          <td>
            Adobe Flash Player 10, Quadband GSM Worldphone, Advance Business Security, Complex Password Secure, Review &
            Edit Documents with Quick Office, Personal 3G Mobile Hotspot for up to 5 WiFi enabled Devices, Advanced
            Social Networking brings all social content into a single homescreen widget
          </td>
          <td>
            <a href="product-details.html">Show</a>
          </td>
        </tr>
      </table>
    );
  }
}

export default Products;
