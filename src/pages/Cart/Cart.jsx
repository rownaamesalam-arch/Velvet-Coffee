import { useCart } from "../../context/CartContext";

import "./Cart.css";


function Cart(){


 const {

cartItems,

increaseQuantity,

decreaseQuantity,

removeFromCart

} = useCart();



  const total = cartItems.reduce(

    (sum,item)=>

      sum + item.price * item.quantity

    ,0

  );



  return (

    <section className="cart">


      <h1>
        Your Shopping Cart
      </h1>



      {
        cartItems.length === 0 ? (

          <p>
            Your cart is empty
          </p>


        ) : (


          <>


          <div className="cart-items">


          {
            cartItems.map((item)=>(


              <div 
                className="cart-item"
                key={item.id}
              >


                <img
                  src={item.image}
                  alt={item.name}
                />


                <div>


                  <h3>
                    {item.name}
                  </h3>


                  <p>
                    ${item.price}
                  </p>


                  <span>
                    Quantity: {item.quantity}
                  </span>

                  <div className="quantity">


<button

onClick={()=>decreaseQuantity(item.id)}

>
-
</button>



<span>
{item.quantity}
</span>



<button

onClick={()=>increaseQuantity(item.id)}

>
+
</button>


</div>



<button

className="remove"

onClick={()=>removeFromCart(item.id)}

>

Remove

</button>


                </div>


              </div>


            ))
          }


          </div>



          <h2>

            Total: ${total.toFixed(2)}

          </h2>



          <button>
            Checkout
          </button>


          </>


        )
      }


    </section>

  );

}


export default Cart;