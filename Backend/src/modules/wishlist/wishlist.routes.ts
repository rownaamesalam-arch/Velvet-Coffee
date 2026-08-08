import {Router} from "express"
import { addWishlistControllor, deleteWishlistControllor, getWishlistControllor } from "./wishlist.controllor.js";
import { authMiddleware } from "../../middleware/authtenication.js";
const wishlistRouter = Router();

wishlistRouter.get("/wishlist",authMiddleware,getWishlistControllor)
wishlistRouter.patch("/wishlist/:productId",authMiddleware,addWishlistControllor)
wishlistRouter.delete("/wishlist/:productId",authMiddleware,deleteWishlistControllor)



export default wishlistRouter;