import mongoose, { Schema } from "mongoose";
import { ICart } from "./cart.types.js";

const cartSchema = new Schema<ICart>({
   
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items:[{
         product:{
            type:mongoose.Schema.Types.ObjectId,
         ref:"Product",
         required:true},
         size:{
            type:String,
        required:true},
         quantity:{type:Number,
            required:true,
            default:1
         }
    }]
})

export const Cart = mongoose.model("Cart",cartSchema)