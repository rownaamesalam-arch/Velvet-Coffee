import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";
import { getMyOrders } from "../../services/order.service";
import "./Orders.css";

function Orders() {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();
        setOrders(data.orders || []);
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Could not load orders"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: "/orders" }} replace />;
  }

  return (
    <section className="orders">
      <div className="orders-header">
        <h1>My Orders</h1>
        <p>Track your recent coffee orders and shipping details.</p>
      </div>

      {loading ? (
        <div className="orders-empty">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="orders-empty">
          No orders yet. <Link to="/shop">Start shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="order-card" key={order._id}>
              <div className="order-card-header">
                <div>
                  <h2>Order #{order._id.slice(-6).toUpperCase()}</h2>
                  <p>
                    {new Date(order.createdAt).toLocaleDateString()} · $
                    {order.total.toFixed(2)}
                  </p>
                </div>

                <span className="order-status">
                  {order.status}
                </span>
              </div>

              <div className="order-content">
                <div className="order-items">
                  {order.items.map((item) => (
                    <div
                      className="order-item"
                      key={`${order._id}-${item.product}-${item.size}`}
                    >
                      <div>
                        <h3>{item.name}</h3>
                        <p>
                          Size: {item.size} · Qty: {item.quantity}
                        </p>
                      </div>

                      <strong>${item.price}</strong>
                    </div>
                  ))}
                </div>

                <div className="order-shipping">
                  <h3>Shipping Address</h3>
                  {order.shippingAddress ? (
                    <>
                      <p>{order.shippingAddress.fullName}</p>
                      <p>{order.shippingAddress.phone}</p>
                      <p>{order.shippingAddress.address}</p>
                      <p>
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.postalCode}
                      </p>
                      <p>{order.shippingAddress.country}</p>
                    </>
                  ) : (
                    <p>No shipping address saved for this order.</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Orders;
