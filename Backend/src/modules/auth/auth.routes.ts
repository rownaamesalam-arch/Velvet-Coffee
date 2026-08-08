import { Router } from "express"
import { loginController, RegisterController } from "./auth.controller.js"

const authrouter = Router()
authrouter.post("/register",RegisterController)
authrouter.post("/login",loginController)

export default authrouter;