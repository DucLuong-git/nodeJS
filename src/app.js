const express=require("express")
import cors from "cors"
const app=express()
app.use(cors()) //cấp quyền truy cập api 
app.get("/", ()=>{
    console.log("home page")
})

const products =[
    {id:1, name: "product 1", price: 100},
    {id:2, name: "product 2", price: 100},
    {id:3, name: "product 3", price: 100}
]

app.get("/products",(req, res)=>{
    return res.json(products)
})

app.get("/products/:id",(req, res)=>{
    const productId=parseInt(req.params.id)
    const product=products.find(p=>p.id===productId)
    if(product){
        return res.json(product)
    }else{
        return res.status(404).json({message: "không có sản phẩm"})
    }
})

app.delete("/products/:id",(req, res)=>{
    const productId =parseInt(req.params.id)
    const productIndex = products.findIndex(p=> p.id === productId)
    if(productIndex===-1){
         return res.status(404).json({message: "không có sản phẩm để xoá"})
    }
    const deleteProduct = products.splice(productIndex, 1)[0]
    return res.json({
        message:"xoá sp thành công",
        deleteProduct: deleteProduct,
        ResProduct: products
    })
})

app.get("/greet",(req, res)=>{
    const name=req.query.name || "Luong"
    res.json({message: `xin chào ${name}`})
})

app.get("/sum",(req, res)=>{
    const a =parseInt(req.query.a) || 0 // Lấy giá trị 'a' từ query string
    const b =parseInt(req.query.b) || 0 // Lấy giá trị 'b' từ query string
    res.json({sum: a + b})
})

app.listen(3000, () => {
    console.log("Server đang chạy cổng 3000");
});