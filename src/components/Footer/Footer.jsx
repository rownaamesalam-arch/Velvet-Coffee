import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiMail
} from "react-icons/fi";

import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2 className="footer-logo">
            Velvet Coffee
          </h2>

          <p>
            Crafted with passion for coffee lovers.
            Enjoy premium beans, handcrafted drinks,
            and a warm coffee experience every day.
          </p>

          <div className="social-icons">

            <a href="#">
              <FiInstagram />
            </a>

            <a href="#">
              <FiFacebook />
            </a>

            <a href="#">
              <FiLinkedin />
            </a>

            <a href="#">
              <FiMail />
            </a>

          </div>

        </div>

        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>

        </div>

        <div className="footer-column">

          <h3>
            Customer Service
          </h3>

          <a href="#">Shipping</a>

          <a href="#">Returns</a>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>

        </div>

        <div className="footer-column">

          <h3>
            Newsletter
          </h3>

          <p>
            Subscribe to receive the latest offers and new coffee collections.
          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Your email"
            />

            <button>
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Velvet Coffee. Made with ☕ in Egypt.

      </div>

    </footer>

  );

}

export default Footer;