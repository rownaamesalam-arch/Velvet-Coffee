import { Response,Request } from "express";
import { AddToCart, deleteFromCart, GetCart, UpdateCart } from "./cart.services.js";




export const GetCartControllor = async(req:Request,res:Response)=>{
    try{const data = await GetCart(req.user!)
    return res.status(200).json({
        message:"fetched cart successfully",
        ...data
    })}catch(error){
        return res.status(400).json({message:(error as Error).message})
    }
}

export const AddToCartControllor = async(req:Request,res:Response)=>{
    try{const cart = await AddToCart(req.user!,req.body)
    return res.status(200).json({
        message:"added to cart successfully",
        cart
    })}catch(error){
        return res.status(400).json({message:(error as Error).message})
    }
}

export const UpdateCartControllor = async(req:Request,res:Response)=>{
    try{const cart = await UpdateCart(req.params.id as string,req.user!,req.body.size,req.body.quantity)
    return res.status(200).json({
        message:"updated  cart successfully",
        cart
    })}catch(error){
        return res.status(400).json({message:(error as Error).message})
    }
}

export const deleteFromCartControllor = async(req:Request,res:Response)=>{
    try{ const cart = await deleteFromCart(req.user!,req.params.productId as string , req.body.size)
        return res.status(200).json({
            message:"deleted item",
            cart
        })

    }catch(error){
        return res.status(400).json({
            message:(error as Error).message
        })
    }
}