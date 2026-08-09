import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { placeOrder } from "../../services/order.service";
import "./Checkout.css";

const getProductId = (product) => product._id || product.id;

function Checkout() {
  const { isAuthenticated } = useAuth();
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: ""
  });

  const [loading, setLoading] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: "/checkout" }} replace />;
  }

  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  function handleChange(event) {
    setShippingAddress({
      ...shippingAddress,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      await placeOrder({
        shippingAddress,
        items: cartItems.map((item) => ({
          product: getProductId(item),
          size: item.selectedSize || item.size || "Default",
          quantity: item.quantity
        }))
      });

      clearCart();
      toast.success("Order placed successfully");
      navigate("/orders");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Could not place order"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <div className="checkout-card">
          <h2>Shipping Address</h2>

          <form
            className="checkout-form"
            id="checkout-form"
            onSubmit={handleSubmit}
          >
            <label>
              Full Name
              <input
                name="fullName"
                value={shippingAddress.fullName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Phone
              <input
                name="phone"
                value={shippingAddress.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Address
              <input
                name="address"
                value={shippingAddress.address}
                onChange={handleChange}
                required
              />
            </label>

            <div className="checkout-row">
              <label>
                City
                <input
                  name="city"
                  value={shippingAddress.city}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Postal Code
                <input
                  name="postalCode"
                  value={shippingAddress.postalCode}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Country
              <input
                name="country"
                value={shippingAddress.country}
                onChange={handleChange}
                required
              />
            </label>
          </form>
        </div>

        <aside className="checkout-card checkout-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div className="checkout-item" key={getProductId(item)}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>
                  {item.quantity} x ${item.price}
                </p>
              </div>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            className="place-order-btn"
            disabled={loading}
            form="checkout-form"
            type="submit"
          >
            {loading ? "Placing order..." : "Place Order"}
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;
