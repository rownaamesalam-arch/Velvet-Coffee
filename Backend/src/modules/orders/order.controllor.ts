import { Request, Response } from "express";
import { checkout, getMyOrders } from "./order.services.js";




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

export const getMyOrdersControllor = async(req:Request,res:Response)=>{
    try{
        const orders = await getMyOrders(req.user!)
        return res.status(200).json({
            message:"orders fetched successfully",
            orders
        })
    }catch(error){
        return res.status(401).json({
            message:(error as Error).message
        })
    }
}
