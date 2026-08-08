import mongoose, { Schema } from "mongoose";
import { IUser } from "./auth.types.js";


const userSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true
    }
    ,email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
},{
    timestamps:true
})

export const User = mongoose.model("user",userSchema)