import express from 'express'
let router=express.Router();
router.get("/",(req,res)=>{
    res.send("user Home page")
})

router.get("/all",(req,res)=>{
    res.send("All users")
})

router.post("/add",(req,res)=>{
    res.send("add page")
})

router.put("/update",(req,res)=>{
    res.send("update page")
})

router.delete("/delete",(req,res)=>{
    res,send("delete page")
})

export default router