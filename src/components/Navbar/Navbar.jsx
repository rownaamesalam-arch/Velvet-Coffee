import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiMoon,
  FiSun,
} from "react-icons/fi";

import "./Navbar.css";

import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { cartItems } = useCart();
  const { darkMode, setDarkMode } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">
            Velvet Coffee
          </div>

          <nav className="nav-links">
            <Link to="/">Home</Link>

            <Link to="/shop">Shop</Link>

            <Link to="/wishlist">Wishlist</Link>

            <a href="#categories">
              Categories
            </a>

            <a href="#footer">
              About
            </a>
          </nav>

          <div className="nav-actions">
            <button>
              <FiSearch />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <Link
              to="/wishlist"
              className="wishlist-icon"
            >
              <FiHeart />
            </Link>

            <Link
              to="/cart"
              className="cart-icon"
            >
              <FiShoppingBag />

              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/shop"
          onClick={() => setMenuOpen(false)}
        >
          Shop
        </Link>

        <Link
          to="/wishlist"
          onClick={() => setMenuOpen(false)}
        >
          Wishlist
        </Link>

        <a
          href="#categories"
          onClick={() => setMenuOpen(false)}
        >
          Categories
        </a>

        <a
          href="#footer"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
      </div>
    </>
  );
}

export default Navbar;