const express=require('express');
const path=require('path')
const app=express();

const staticpath=path.join(__dirname,"../portofolio");
app.use(express.static(staticpath))
app.listen(8080,()=>{
    console.log("listening")
})