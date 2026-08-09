import { Cart } from "../cart/cart.model.js";
import { Product } from "../products/product.model.js";
import { Order } from "./order.model.js";

type CheckoutItem = {
    product: string;
    size?: string;
    quantity: number;
};

type ShippingAddress = {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
};

type CheckoutPayload = {
    items?: CheckoutItem[];
    shippingAddress?: ShippingAddress;
};

const validateShippingAddress = (shippingAddress?: ShippingAddress) => {
    if (!shippingAddress) {
        throw new Error("shipping address is required");
    }

    const requiredFields: Array<keyof ShippingAddress> = [
        "fullName",
        "phone",
        "address",
        "city",
        "postalCode",
        "country"
    ];

    for (const field of requiredFields) {
        if (!shippingAddress[field]) {
            throw new Error(`${field} is required`);
        }
    }
};

export const checkout = async (userId: string, data: CheckoutPayload = {}) => {
    validateShippingAddress(data.shippingAddress);
    const shippingAddress = data.shippingAddress as ShippingAddress;

    let checkoutItems = data.items;
    let cart = null;

    if (!checkoutItems || checkoutItems.length === 0) {
        cart = await Cart.findOne({
            user: userId
        });

        if (!cart) {
            throw new Error("cart not found");
        }

        checkoutItems = cart.items.map((item) => ({
            product: item.product.toString(),
            size: item.size,
            quantity: item.quantity
        }));
    }

    if (checkoutItems.length === 0) {
        throw new Error("cart is empty");
    }

    const orderItems = [];

    let total = 0;

    for (const checkoutItem of checkoutItems) {
        const product = await Product.findById(
            checkoutItem.product
        );

        if (!product) {
            throw new Error("product not found");
        }

        if (product.stock < checkoutItem.quantity) {
            throw new Error(
                `not enough stock for ${product.name}`
            );
        }

        const itemTotal =
            product.price * checkoutItem.quantity;

        total += itemTotal;

        orderItems.push({
            product: product._id,
            name: product.name,
            price: product.price,
            size: checkoutItem.size || "Default",
            quantity: checkoutItem.quantity
        });
    }

    const order = await Order.create({
        user: userId,
        items: orderItems,
        total,
        shippingAddress,
        status: "pending"
    });

    for (const checkoutItem of checkoutItems) {
        await Product.findByIdAndUpdate(
            checkoutItem.product,
            {
                $inc: {
                    stock: -checkoutItem.quantity
                }
            }
        );
    }

    if (cart) {
        cart.items = [];
        await cart.save();
    }

    return order;
};
