import mongoose from "mongoose";

export const connectDB =async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/coffee-shop")

        console.log("connecting successfully")
    }catch(error){
        console.log("error to connecting")
    }
}