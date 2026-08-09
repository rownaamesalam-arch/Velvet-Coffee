/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const WishlistContext = createContext();

const getProductId = (product) => product._id || product.id;


export function WishlistProvider({children}){


  const [wishlistItems,setWishlistItems] = useState(

    JSON.parse(
      localStorage.getItem("wishlist")
    ) || []

  );



  useEffect(()=>{

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlistItems)
    );

  },[wishlistItems]);




  function toggleWishlist(product){


    setWishlistItems((prev)=>{


      const exists = prev.find(
        item => getProductId(item) === getProductId(product)
      );



      if(exists){

        return prev.filter(
          item => getProductId(item) !== getProductId(product)
        );

      }



      return [
        ...prev,
        product
      ];

    });


  }



  return (

    <WishlistContext.Provider

      value={{
        wishlistItems,
        toggleWishlist
      }}

    >

      {children}

    </WishlistContext.Provider>

  );

}




export function useWishlist(){

  return useContext(WishlistContext);

}
