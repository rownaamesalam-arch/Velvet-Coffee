import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const CartContext = createContext();



export function CartProvider({ children }) {


  const [cartItems, setCartItems] = useState(
    JSON.parse(
      localStorage.getItem("cart")
    ) || []
  );

  useEffect(()=>{

  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
  );

},[cartItems]);



  function addToCart(product) {


    setCartItems((prev)=>{


      const existing = prev.find(
        item => item.id === product.id
      );


      let updatedCart;


      if(existing){

        updatedCart = prev.map(item=>

          item.id === product.id

          ? {
              ...item,
              quantity:item.quantity + 1
            }

          : item

        );


      }else{


        updatedCart = [

          ...prev,

          {
            ...product,
            quantity:1
          }

        ];

      }


      

      return updatedCart;


    });


  }

  function increaseQuantity(id){

  setCartItems((prev)=>

    prev.map(item =>

      item.id === id

      ? {
          ...item,
          quantity:item.quantity + 1
        }

      : item

    )

  );

}



function decreaseQuantity(id){

  setCartItems((prev)=>

    prev.map(item =>

      item.id === id && item.quantity > 1

      ? {
          ...item,
          quantity:item.quantity - 1
        }

      : item

    )

  );

}



function removeFromCart(id){

  setCartItems((prev)=>

    prev.filter(item=>item.id !== id)

  );

}



  return (

    <CartContext.Provider

value={{

  cartItems,

  addToCart,

  increaseQuantity,

  decreaseQuantity,

  removeFromCart

}}

>

      {children}

    </CartContext.Provider>

  );


}



export function useCart(){

  return useContext(CartContext);

}