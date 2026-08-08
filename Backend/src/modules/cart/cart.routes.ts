import { Router } from "express";

import {
    GetCartControllor,
    AddToCartControllor,
    UpdateCartControllor,
    deleteFromCartControllor
} from "./cart.controllor.js"
import { authMiddleware } from "../../middleware/authtenication.js";
const cartRouter = Router();

cartRouter.get("/cart", authMiddleware,GetCartControllor);

cartRouter.post("/cart",authMiddleware, AddToCartControllor);

cartRouter.patch(
    "/cart/item/:id",authMiddleware,
    UpdateCartControllor
);

cartRouter.delete(
    "/cart/item/:productId",authMiddleware,
    deleteFromCartControllor
);

export default cartRouter;