import { Request, Response } from "express";
import { getProducts,getProductById, createProduct, updateProduct, deleteProduct } from "./products.services.js";

export const getProductsControllor = async(req:Request,res:Response)=>{
    try{
        console.log("GET PRODUCTS ROUTE HIT");
        const product = await getProducts();
        return res.status(200).json({
            message:"products fetched successfully",
            products: product 
        })
    }catch(error){
    console.log(error);

    return res.status(400).json({
        message:(error as Error).message
    })
}

}

export const getProductByIdControllor = async(req:Request,res:Response)=>{
    try{
        const product = await getProductById(req.params.id as string)
        return res.status(200).json({
            message:"products fetched successfully",
            product
        })
    }catch(error){
        return res.status(400).json({
            message:(error as Error).message
        })
    }
}

export const createProductControllor = async(req:Request,res:Response)=>{
    try{
        const product  = await createProduct(req.body);
        return res.status(200).json({
            message:"product created successfully",
            product
        })
    }catch(error){
        return res.status(400).json({
            message:(error as Error).message
        })
    }
}

export const updateProductControllor = async(req:Request,res:Response)=>{
    try{
        const product = await updateProduct(req.params.id as string,req.body)
        return res.status(200).json({
            message:"product updated successfullly",
            product
        })

    }catch(error){
        return res.status(400).json({
            message:(error as Error).message
        })
    }
}

export const deleteProductControllor = async(req:Request,res:Response)=>{
    try{
        const product = await deleteProduct(req.params.id as string)
        return res.status(200).json({
            message:"product updated successfullly",
            product
        })

    }catch(error){
        return res.status(400).json({
            message:(error as Error).message
        })
    }
}