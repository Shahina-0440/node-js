import express from 'express'
let app=express()
import userRouter from "./Router/userRouter.js"
app.get("/",(req,res)=>{
    res.send("home page")
})
app.use("/user",userRouter)
/* 
app.use("/user/add",userRouter)

app.use("/user/update",userRouter)

app.use("/user/delete",userRouter) */

app.listen(8000,(err)=>{
    console.log("listening.....")
})