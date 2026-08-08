import { Types } from "mongoose";



export interface ICartItem{
    product:Types.ObjectId,
    size:string,
    quantity:number
}

export interface ICart{
    user:Types.ObjectId,
    items:ICartItem[]
}


