import { Request, Response } from "express";
import { addWishlist, deleteWishlist, getWishlist } from "./wishlist.services.js";



export const getWishlistControllor = async(req:Request,res:Response)=>{
    try{
        const wishlist = await getWishlist(req.user!)

        return res.status(200).json({
            message:"fetched wishlist successfully",
            wishlist
        });
    }catch(error){
        return res.status(401).json({
            message:(error as Error).message
        })
    }
}

export const addWishlistControllor = async(req:Request,res:Response)=>{
    try{
        const wishlist = await addWishlist(req.user!,req.params.productId as string);
    return res.status(200).json({
        message:"added to your wishlist successfully",
        wishlist
    })
    }catch(error){
        return res.status(401).json({
            message:(error as Error).message
        })
    }
}

export const deleteWishlistControllor = async(req:Request,res:Response)=>{
    try{
        const wishlist = await deleteWishlist(req.user!,req.params.productId as string)
    return res.status(200).json({
        message:"deleted successfully",
        wishlist
    })
    }catch(error){
        return res.status(401).json({
            message:(error as Error).message
        })
    }
}