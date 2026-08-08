import { User } from "../auth/auth.model.js";
import { Product } from "../products/product.model.js";
import { Cart } from "./cart.model.js"
import { ICart } from "./cart.types.js";




export const GetCart = async (userId: string) => {

    const user = await User.findById(userId);

    if (!user) {
        throw new Error("user not found");
    }

    const cart = await Cart.findOne({
        user: userId
    });

    if (!cart) {
        throw new Error("cart not found");
    }

    let total = 0;

    for (const item of cart.items) {

        const product = await Product.findById(item.product);

        if (!product) {
            continue;
        }

        total += product.price * item.quantity;
    }

    return {
        cart,
        total
    };
};

export const AddToCart = async (userId:string,data: Omit<ICart, "user">) => {

    const existuser = await User.findById(userId);

    if (!existuser) {
        throw new Error("user not exists");
    }

    const item = data.items[0]
    if(!item){
        throw new Error ("cart item is required")
    }

    const cart = await Cart.findOne({
        user:userId
    });

    if (!cart) {
        const newcart = await Cart.create({user:userId,items:data.items});
        return newcart;
    }

    const existingItem = cart.items.find(
        (cartItem) =>
            cartItem.product.toString() === item.product.toString() &&
            cartItem.size === item.size
    );

    if (existingItem) {

        existingItem.quantity += item.quantity;

    } else {

        cart.items.push(item);

    }

    await cart.save();

    return cart;
};

export const UpdateCart = async(productId:string,userId:string,size:string,quantity:number)=>{

    const user = await User.findById(userId)
    if(!user){
        throw new Error("user not found")
    }

    const cart = await Cart.findOne({
        user:userId
    })
    if(!cart){
        throw new Error("cart not found")
    }

    const item = cart.items.find((cartItem) => cartItem.product.toString() === productId && cartItem.size === size)

    if(!item){
        throw new Error ("no item")
    }

    if(quantity <1){
        throw new Error("quantity must be at least 1")
    }

     item.quantity = quantity
    await cart.save();
    return cart;
} 

export const deleteFromCart = async(userId:string,productId:string,size:string)=>{
    const user = await User.findById(userId)
    if(!user){
        throw new Error("user not found")
    }

    const cart = await Cart.findOne({
        user:userId
    })
    if(!cart){
        throw new Error("cart not found")
    }

    const itemIndex = cart.items.findIndex((cartItem) => cartItem.product.toString() === productId &&
     cartItem.size === size)
    if(itemIndex == -1){
        throw new Error("no item")
    }
    cart.items.splice(itemIndex,1)
    await cart.save()

    return cart
}

