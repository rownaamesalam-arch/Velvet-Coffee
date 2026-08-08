import cors from "cors";
import express from "express";
import { connectDB } from "./DB/db.js";
import authrouter from "./modules/auth/auth.routes.js";
import productRoute from "./modules/products/product.routes.js";
import cartRouter from "./modules/cart/cart.routes.js";
import wishlistRouter from "./modules/wishlist/wishlist.routes.js";
const app = express();
await connectDB()
app.use(cors());
app.use(express.json());

app.use(authrouter)
app.use(productRoute)
app.use(cartRouter)
app.use(wishlistRouter)
export default app;