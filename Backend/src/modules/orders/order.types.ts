import { Types } from "mongoose"
export interface IOrderItem{
    product:Types.ObjectId,
    price:number,
    size:string,
    quantity:number,
    name:string
}


export interface IOrder{
    user:Types.ObjectId,
    items:[IOrderItem],
    total:number,
    status:string
}