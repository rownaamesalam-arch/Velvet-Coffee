import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiMenu
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../../context/CartContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
function Navbar() {

    const { cartItems } = useCart();
    const { darkMode, setDarkMode } = useTheme();


const cartCount = cartItems.reduce(
  (total,item)=> total + item.quantity,
  0
);

  return (

    <header className="navbar">

      <div className="navbar-container">


        <div className="logo">
          Velvet Coffee
        </div>



        <nav className="nav-links">

  <Link to="/">
    Home
  </Link>

  <Link to="/shop">
    Shop
  </Link>

  <Link to="/wishlist">
    Wishlist
  </Link>

  <a href="#categories">
  Categories
</a>

  <a href="#">
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
    {
      darkMode 
      ? <FiSun />
      : <FiMoon />
    }
  </button>


          <Link 
  to="/wishlist"
  className="wishlist-icon"
>
  <FiHeart />
</Link>


          <button>
            <Link 
  to="/cart"
  className="cart-icon"
>

  <FiShoppingBag />

  {
    cartCount > 0 && (
      <span className="cart-badge">
        {cartCount}
      </span>
    )
  }

</Link>
          </button>


          <button className="menu-btn">
            <FiMenu />
          </button>


        </div>


      </div>

    </header>

  );

}


export default Navbar;