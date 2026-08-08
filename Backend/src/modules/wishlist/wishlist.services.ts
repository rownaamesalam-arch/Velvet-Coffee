import { Product } from "../products/product.model.js"
import { Wishlist } from "./wishlist.model.js"


export const getWishlist = async(userId:string)=>{
    const wishlist = await Wishlist.findOne({user:userId})
    if(!wishlist){
        throw new Error ("wishlist not found")
    }
    return wishlist
}

export const addWishlist = async(userId:string,productId:string)=>{
    const wishlist = await Wishlist.findOne({user:userId})
    if(!wishlist){
        const newWishlist = await Wishlist.create({
            user: userId,
            products: [productId]
        });

        return newWishlist;
    }

    const product = await Product.findById(productId)
    if(!product){
        throw new Error ("product not found")
    }

    const existingproduct= wishlist.products.find((id)=> id.toString() === productId)
    if(existingproduct){
        throw new Error("product already exists")
    }

    wishlist.products.push(product._id)
    await  wishlist.save()
    return wishlist
}

export const deleteWishlist = async(userId:string,productId:string)=>{
     const wishlist = await Wishlist.findOne({user:userId})
    if(!wishlist){
        throw new Error ("wishlist not found")
    }

    const productIndex = wishlist.products.findIndex((id)=>id.toString() === productId) 
    if(productIndex === -1){
        throw new Error ("product not in wishlist")
    }
    wishlist.products.splice(productIndex,1)
    await wishlist.save();
    return wishlist;
}