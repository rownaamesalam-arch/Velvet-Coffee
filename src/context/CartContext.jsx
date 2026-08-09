import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const CartContext = createContext();

const getProductId = (product) => product._id || product.id;

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    const productId = getProductId(product);

    setCartItems((prev) => {
      const existing = prev.find(
        (item) => getProductId(item) === productId
      );

      if (existing) {
        return prev.map((item) =>
          getProductId(item) === productId
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: product.quantity || 1
        }
      ];
    });
  }

  function increaseQuantity(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        getProductId(item) === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        getProductId(item) === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
    );
  }

  function removeFromCart(id) {
    setCartItems((prev) =>
      prev.filter((item) => getProductId(item) !== id)
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

export function useCart() {
  return useContext(CartContext);
}
