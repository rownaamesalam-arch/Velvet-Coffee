import "./ProductCard.css";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

function ProductCard({ product }) {

    const {
  wishlistItems,
  toggleWishlist
}=useWishlist();

  const productId = product._id || product.id;

  return (

    <article className="product-card">


      <span className="product-badge">
        {product.badge}
      </span>


      <button

className="wishlist-btn"

onClick={()=>toggleWishlist(product)}

>

<FiHeart

fill={
 wishlistItems.some(
  item=>item.id===product.id
 )
 ? "#8b5e3c"
 : "none"
}

/>

</button>



      <Link 
        to={`/product/${productId}`}
        className="product-link"
      >

        <div className="product-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>



        <div className="product-info">


          <p className="category">
            {product.category}
          </p>



          <h3>
            {product.name}
          </h3>



          <div className="rating">
            ⭐ {product.rating}
          </div>



          <div className="price">


            <span className="new-price">
              ${product.price}
            </span>


            <span className="old-price">
              ${product.oldPrice}
            </span>


          </div>


        </div>

      </Link>



      <button className="add-cart">

        <FiShoppingBag />

        Add to Cart

      </button>


    </article>

  );

}


export default ProductCard;
