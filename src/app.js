const express=require("express")
const app=express()
app.get("/", ()=>{
    console.log("home page")
})
app.listen(3000, () => {
    console.log("Server đang chạy cổng 3000");
});