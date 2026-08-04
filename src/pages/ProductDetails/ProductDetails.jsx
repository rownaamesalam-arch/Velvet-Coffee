import { useState } from "react";
import { useParams } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import products from "../../data/products";

import toast from "react-hot-toast";

import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const { addToCart } = useCart();

  const [size, setSize] = useState("250g");
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {

    return <h2>Product Not Found</h2>;

  }

  return (

    <section className="product-details">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="product-info">

        <span>
          {product.category}
        </span>

        <h1>
          {product.name}
        </h1>

        <p>
          Premium coffee crafted with carefully selected beans for an unforgettable experience.
        </p>

        <h2>
          ${product.price}
        </h2>

        <div className="size-selector">

          <h4>Choose Size</h4>

          <div className="sizes">

            <button
              className={size === "250g" ? "active-size" : ""}
              onClick={() => setSize("250g")}
            >
              250g
            </button>

            <button
              className={size === "500g" ? "active-size" : ""}
              onClick={() => setSize("500g")}
            >
              500g
            </button>

            <button
              className={size === "1kg" ? "active-size" : ""}
              onClick={() => setSize("1kg")}
            >
              1kg
            </button>

          </div>

        </div>

        <div className="quantity-selector">

          <h4>Quantity</h4>

          <div className="quantity-box">

            <button
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
            >
              <FiMinus />
            </button>

            <span>
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
            >
              <FiPlus />
            </button>

          </div>

        </div>

        <button
          className="add-cart-btn"
          onClick={() => {

            for (let i = 0; i < quantity; i++) {
              addToCart(product);
            }

            toast.success(
              `${quantity} × ${product.name} added to cart`
            );

          }}
        >
          Add To Cart
        </button>

        

      </div>

    </section>

  );

}

export default ProductDetails;