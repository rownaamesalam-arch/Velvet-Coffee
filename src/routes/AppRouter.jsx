import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,

    children: [

  {
    index:true,
    element:<Home />,
  },
  {
  path: "wishlist",
  element: <Wishlist />,
},
  {
    path:"shop",
    element:<Shop />,
  },

  {
    path:"product/:id",
    element:<ProductDetails />,
  },

  {
    path:"cart",
    element:<Cart />,
  }

]

  },

]);


export default router;