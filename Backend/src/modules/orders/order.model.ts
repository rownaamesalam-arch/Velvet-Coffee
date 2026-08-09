import mongoose, { Schema } from "mongoose";
import { IOrder } from "./order.types.js";

const orderItemSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:Number,
    size:String,
    quantity:{
        type:Number,
        required:true,
        min:1
    }
},{
    _id:false
})
const orderitemSchema = new Schema<IOrder>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items:{
        type:[orderItemSchema] ,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    shippingAddress:{
        fullName:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        }
    },
    status:{
        type:String,
        enum:[ "pending", "confirmed", "processing", "shipped", "delivered", "cancelled" ],
        default:"pending"
    }
},
{
    timestamps:true
})

export const Order = mongoose.model("Order",orderitemSchema)
