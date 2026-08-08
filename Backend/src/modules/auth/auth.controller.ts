import { Request, Response } from "express";
import { loginUser, RegisterUser } from "./auth.services.js";




export const RegisterController = async(req:Request,res:Response)=>{
    try{
        const user = await RegisterUser(req.body)

        return res.status(200).json({
            message:"user created successfully",
            user
        })
    }catch(err){
        return res.status(400).json({
            message:(err as Error).message
        })
    }
}


export const loginController = async(req:Request,res:Response)=>{
    try{
        const user = await loginUser(req.body.email,req.body.password)


        return res.status(200).json({message:"user login successfully",user})
    }catch(error){
        return res.status(400).json({
            message:(error as Error).message
        })
    }
}