
import Product from "../models/product.model";
import Joi from 'joi';
import { asyncHandler } from "../utils/asyncHandler"

const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
})
export const getAll = asyncHandler(async (req, res)=> {
    const product = await Product.find()
    return products

}) 

export const getOne = asyncHandler(async (req, res) => {
    const product = await Product.findById(res.params.id)
    if(!product){
        return res.status(400).json({
            message: "không có sản phẩm"
        })
    }
    return product
})

export const createOne = asyncHandler(async (req, res) => {
    const product= await Product.create(req.body)
    return product
});
export const deleteOne = asyncHandler(async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    return {success:true}

})

export const updateOne = asyncHandler(async (req, res) => {
    const product =await Product.findByIdAndUpdate(req.params.id, res.body, {new:true})
    return product
})