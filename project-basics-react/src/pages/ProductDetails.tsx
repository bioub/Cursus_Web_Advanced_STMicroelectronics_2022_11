// TODO utiliser les modules CSS si possible
import './ProductDetails.css';
import { Component } from "react";

class ProductDetails extends Component {
  render() {
    return <div className="ProductDetails">
      <div className="phone-image">
        <img className="phone" src="img/phones/dell-streak-7.0.jpg" />
      </div>
      <h1>Dell Streak 7</h1>
      <p>
        Introducing Dell™ Streak 7. Share photos, videos and movies together.
        It’s small enough to carry around, big enough to gather around. Android™
        2.2-based tablet with over-the-air upgrade capability for future OS
        releases. A vibrant 7-inch, multitouch display with full Adobe® Flash
        10.1 pre-installed. Includes a 1.3 MP front-facing camera for
        face-to-face chats on popular services such as Qik or Skype. 16 GB of
        internal storage, plus Wi-Fi, Bluetooth and built-in GPS keeps you in
        touch with the world around you. Connect on your terms. Save with 2-year
        contract or flexibility with prepaid pay-as-you-go plans
      </p>
      <ul className="phone-thumbs">
        <li>
          <img src="img/phones/dell-streak-7.0.jpg" />
        </li>
        <li>
          <img src="img/phones/dell-streak-7.1.jpg" />
        </li>
        <li>
          <img src="img/phones/dell-streak-7.2.jpg" />
        </li>
        <li>
          <img src="img/phones/dell-streak-7.3.jpg" />
        </li>
        <li>
          <img src="img/phones/dell-streak-7.4.jpg" />
        </li>
      </ul>
    </div>;
  }
}

export default ProductDetails;
