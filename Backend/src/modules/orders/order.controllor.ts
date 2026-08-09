import { Request, Response } from "express";
import { checkout } from "./order.services.js";




export const checkoutControllor = async(req:Request,res:Response)=>{
    try{
        const Checkout = await checkout(req.user!, req.body)
    return res.status(200).json({message:"checkout successfully",Checkout})
    }catch(error){
        return res.status(401).json({
            message:(error as Error).message
        })
    }
}
