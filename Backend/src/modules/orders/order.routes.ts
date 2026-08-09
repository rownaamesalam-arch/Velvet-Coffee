
import { authMiddleware } from "../../middleware/authtenication.js";
import { Router } from "express";
import { checkoutControllor, getMyOrdersControllor } from "./order.controllor.js";
const checkoutRouter = Router();

checkoutRouter.post("/checkout",authMiddleware,checkoutControllor)
checkoutRouter.get("/orders",authMiddleware,getMyOrdersControllor)


export default checkoutRouter;
