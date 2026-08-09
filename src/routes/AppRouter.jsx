import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";


const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,

    children: [

      {
        index: true,
        element: <Home />,
      },

      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "product/:id",
        element: <ProductDetails />,
      },

      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "wishlist",
        element: <Wishlist />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "checkout",
        element: <Checkout />,
      },

      {
        path: "orders",
        element: <Orders />,
      },

    ],
  },

]);


export default router;
