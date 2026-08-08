import { Router } from "express";
import { createProductControllor, deleteProductControllor, getProductByIdControllor, getProductsControllor, updateProductControllor } from "./products.controller.js";
const productRoute = Router();

productRoute.get("/products",getProductsControllor)
productRoute.get("/products/:id",getProductByIdControllor)
productRoute.post("/products",createProductControllor)
productRoute.patch("/products/:id",updateProductControllor)
productRoute.delete("/products/:id",deleteProductControllor)


export default productRoute;