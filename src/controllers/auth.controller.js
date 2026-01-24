import { expression } from "joi";
import User from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register=asyncHandler(async(req, res)=>{
    //lấy dữ liệu từ clien
    const {username, email, password}=req.body
    //kt dữ liệu tồn tại chưa
    const userExist=await User.findOne({email})
    if(userExist){
        return res.status(400).json({
            message:"email đã tồn tại"
        })
    }
    //mã hoá mật khẩu
    const hashedPassword =await bcrypt.hash(password, 10)
    //lưu vào csdl
    const user = await User.create({username, email, password:hashedPassword})
    user.password=undefined
    return user
})
export const login=asyncHandler(async(req, res)=>{
    const {email, password}=req.body
    const user= await User.findOne({email})
    if(!user){
        return res.status(400).json({
            message:"email không tồn tại"
        })

    }

    const matchPassword= await bcrypt.compare(password, user.password)
    if(!matchPassword){
        return res.status(400).json({
            message:"mật khẩu sai"
        })
    }

    const token=jwt.sign({email: user.email, role: user.role}, "123456", {expiresIn:"1h"}) //sign là 1 hàm của jwt
    user.password= undefined
    return{
        data:user,token
    }

})