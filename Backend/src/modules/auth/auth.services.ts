import { off } from "node:cluster";
import { User } from "./auth.model.js";
import { IUser } from "./auth.types.js";
import bcrypt from "bcrypt"
import { generateToken } from "../../utils/token.js";


export const RegisterUser = async(data:IUser)=>{
    
        const existUser = await User.findOne({
        email:data.email
    })

    if(existUser){
        throw new Error("email already exists")
    }

    const hashpassword = await bcrypt.hash(data.password,10)

    const user = await User.create({
        name:data.name,
        email:data.email,
        password:hashpassword
    });
    return {
        name:user.name,
        email:user.email
    }

    
}

export const loginUser = async(email:string,password:string)=>{
    const user = await User.findOne({
        email
    })

    if(!user){
        throw new Error("email already exists")
    }

    const matchPassword = await bcrypt.compare(password,user.password)
    if(!matchPassword){
        throw new Error("invaild email or password")
    }


    const token = generateToken(user._id.toString())

    return {
        user,
        token
    }
}