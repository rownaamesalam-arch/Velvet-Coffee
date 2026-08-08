import jwt from "jsonwebtoken"


export const generateToken =(userId:string)=>{
    return jwt.sign({
        userId
    },"hdfWLV'LKMD'VLML;MmsvOFNBN",
{
    expiresIn:"7d"
})
}