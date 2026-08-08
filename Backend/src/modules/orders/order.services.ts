import { Cart } from "../cart/cart.model.js"
import { Product } from "../products/product.model.js";
import { Order } from "./order.model.js";

export const checkout = async (userId: string) => {

    const cart = await Cart.findOne({
        user: userId
    });

    if (!cart) {
        throw new Error("cart not found");
    }

    if (cart.items.length === 0) {
        throw new Error("cart is empty");
    }


    const orderItems = [];

    let total = 0;

    for (const cartItem of cart.items) {

        const product = await Product.findById(
            cartItem.product
        );

        if (!product) {
            throw new Error("product not found");
        }


        if (product.stock < cartItem.quantity) {
            throw new Error(
                `not enough stock for ${product.name}`
            );
        }

        const itemTotal =
            product.price * cartItem.quantity;

        total += itemTotal;

        orderItems.push({
            product: product._id,
            name: product.name,
            price: product.price,
            size: cartItem.size,
            quantity: cartItem.quantity
        });
    }

    const order = await Order.create({
        user: userId,
        items: orderItems,
        total: total,
        status: "pending"
    });


    for (const cartItem of cart.items) {

        await Product.findByIdAndUpdate(
            cartItem.product,
            {
                $inc: {
                    stock: -cartItem.quantity
                }
            }
        );
    }

    cart.items = [];

    await cart.save();


    return order;
};