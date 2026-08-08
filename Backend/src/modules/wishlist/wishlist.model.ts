import mongoose, { Schema } from "mongoose";
import { IWishlist } from "./wishlist.types.js";

const wishlistSchema= new Schema<IWishlist>({
    user:mongoose.Schema.Types.ObjectId,
    products:[{
        type:mongoose.Schema.Types.ObjectId
    }]
})

export const Wishlist = mongoose.model("Wishlist",wishlistSchema)