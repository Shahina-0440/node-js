const express=require('express');
const path=require('path')
const app=express();

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../portofolio","index.html"))
})
app.listen(8000,()=>{
    console.log("listening")
})