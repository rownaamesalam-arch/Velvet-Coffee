import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiMoon,
  FiSun,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import "./Navbar.css";

import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { cartItems } = useCart();
  const { darkMode, setDarkMode } = useTheme();
  const { isAuthenticated, logout } = useAuth();

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
            <Link to="/">Velvet Coffee</Link>
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

            {!isAuthenticated && (
              <Link to="/login">Login</Link>
            )}
          </nav>

          <div className="nav-actions">
            <button aria-label="Search">
              <FiSearch />
            </button>

            <button
              aria-label="Toggle theme"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <Link
              to="/wishlist"
              className="wishlist-icon"
              aria-label="Wishlist"
            >
              <FiHeart />
            </Link>

            <Link
              to="/cart"
              className="cart-icon"
              aria-label="Cart"
            >
              <FiShoppingBag />

              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <button
                aria-label="Logout"
                onClick={logout}
              >
                <FiLogOut />
              </button>
            ) : (
              <Link
                to="/login"
                className="account-icon"
                aria-label="Login"
              >
                <FiUser />
              </Link>
            )}

            <button
              className="menu-btn"
              aria-label="Open menu"
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
          aria-label="Close menu"
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

        {!isAuthenticated && (
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        )}

        {isAuthenticated && (
          <button
            className="mobile-logout"
            onClick={() => {
              logout();
              setMenuOpen(false);
            }}
          >
            Logout
          </button>
        )}

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
