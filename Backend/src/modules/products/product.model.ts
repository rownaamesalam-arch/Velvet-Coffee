import mongoose, { Schema } from "mongoose";
import { IProduct } from "./products.types.js";


const productSchema = new Schema<IProduct>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:String
    },
    sizes:[{
        type:String
    }],
    oldPrice: {
    type: Number
},

rating: {
    type: Number,
    default: 5
},

badge: {
    type: String
}
},
{
    timestamps:true
})

export const Product = mongoose.model("Product",productSchema)