import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/global.css";

import router from "./routes/AppRouter";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

<React.StrictMode>

<ThemeProvider>

<WishlistProvider>

<CartProvider>

<RouterProvider router={router} />

<Toaster
 position="top-right"
/>

</CartProvider>

</WishlistProvider>

</ThemeProvider>

</React.StrictMode>

);