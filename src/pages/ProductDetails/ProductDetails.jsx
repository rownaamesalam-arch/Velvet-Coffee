import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";

import { useCart } from "../../context/CartContext";
import { getProductById } from "../../services/product.service";

import toast from "react-hot-toast";

import "./ProductDetails.css";


function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();

  const [size, setSize] = useState("");

  const [quantity, setQuantity] = useState(1);



  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const data = await getProductById(id);

        setProduct(data.product);

        // نخلي أول size هو المختار افتراضياً
        if (data.product.sizes?.length > 0) {
          setSize(data.product.sizes[0]);
        }

      } catch (error) {

        console.log(error);

      }

    };


    fetchProduct();


  }, [id]);



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
          {product.description}
        </p>



        <h2>
          ${product.price}
        </h2>



        <div className="size-selector">

          <h4>
            Choose Size
          </h4>



          <div className="sizes">


            {
              product.sizes?.map((itemSize) => (

                <button

                  key={itemSize}

                  className={
                    size === itemSize
                    ? "active-size"
                    : ""
                  }

                  onClick={() => setSize(itemSize)}

                >

                  {itemSize}

                </button>

              ))
            }


          </div>


        </div>




        <div className="quantity-selector">


          <h4>
            Quantity
          </h4>



          <div className="quantity-box">


            <button

              onClick={() =>
                setQuantity((prev) =>
                  Math.max(1, prev - 1)
                )
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


            const cartProduct = {

              ...product,

              selectedSize: size,

              quantity

            };


            addToCart(cartProduct);



            toast.success(
              `${product.name} added to cart`
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