import { Product } from "./product.model.js";
import { IProduct } from "./products.types.js";




export const getProducts=async()=>{
    const product = await Product.find();


    return product
}

export const getProductById = async(id:string)=>{
    const product = await Product.findById(id)

    if(!product){
         throw new Error("product not found")
    }
    return product
}

export const createProduct = async(data:IProduct)=>{
    const existProduct = await Product.findOne({name:data.name});

    if(existProduct){
        throw new Error (" product already exists")
    }

    const newProduct = await Product.create(
        data

    ); 

    return newProduct;
}

export const updateProduct = async(id:string,data:IProduct)=>{
    const newPro = await Product.findByIdAndUpdate(id,data,{new:true})

    return newPro
}

export const deleteProduct = async (id:string)=>{
    const del = await Product.findByIdAndDelete(id)

    return del;
}