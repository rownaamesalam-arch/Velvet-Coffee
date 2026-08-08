
import { authMiddleware } from "../../middleware/authtenication.js";
import { Router } from "express";
import { checkoutControllor } from "./order.controllor.js";
const checkoutRouter = Router();

checkoutRouter.post("/checkout",authMiddleware,checkoutControllor)


export default checkoutRouter;