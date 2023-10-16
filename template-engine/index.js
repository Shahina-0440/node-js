const express=require('express');
const app=express();
const hbs=require('hbs')
//to set the view engine
app.set("view engine","hbs");

//template engine route
app.get("/about",(req,res)=>{
    res.render("index.hbs",{
        name:"Contact"
    })
});
app.listen(8000,(err)=>{
    if (err) throw err
    console.log("listening.....")
})