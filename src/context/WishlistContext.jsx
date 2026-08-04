import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const WishlistContext = createContext();



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
        item => item.id === product.id
      );



      if(exists){

        return prev.filter(
          item => item.id !== product.id
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