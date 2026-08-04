import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

import "./Wishlist.css";


function Wishlist(){


  const {
    wishlistItems,
    toggleWishlist
  } = useWishlist();



  const {
    addToCart
  } = useCart();



  return (

    <section className="wishlist">


      <h1>
        My Wishlist
      </h1>



      {
        wishlistItems.length === 0 ? (

          <p className="empty">
            Your wishlist is empty
          </p>


        ) : (


          <div className="wishlist-grid">


          {
            wishlistItems.map((product)=>(


              <div
                className="wishlist-card"
                key={product.id}
              >


                <img
                  src={product.image}
                  alt={product.name}
                />



                <h3>
                  {product.name}
                </h3>



                <p>
                  ${product.price}
                </p>



                <button

                  onClick={()=>addToCart(product)}

                >

                  Add To Cart

                </button>



                <button

                  className="remove-wishlist"

                  onClick={()=>toggleWishlist(product)}

                >

                  Remove

                </button>


              </div>


            ))
          }


          </div>


        )
      }


    </section>

  );

}


export default Wishlist;