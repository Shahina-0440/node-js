const express=require('express');
const router=new express.Router;
const MensRanking=require('../models/mensSchema')

router.post("/mens",async (req,res)=>{
    try{
        const addingMensRecords=await new MensRanking(req.body);
        const addingRecord=await addingMensRecords.save()
        res.status(201).send(addingRecord)
    }catch(err){
        res.status(400).send(err)
    }
})
//get request for individual
router.get("/mens/:id",async (req,res)=>{
    try{
        const _id=req.params.id
        const getRecord=await MensRanking.find({_id:_id})
        res.send(getRecord)
    }catch(err){
        res.status(400).send(err)
    }
})
router.get("/mens",async (req,res)=>{
    try{
        const getRecords=await MensRanking.find()
        res.send(getRecords)
    }catch(err){
        res.status(400).send(err)
    }
})
router.patch("/mens/:id",async (req,res)=>{
    try{
        const _id=req.params.id
        const deleteRecord=await MensRanking.findByIdAndUpdate({_id:_id},req.body,{new:true})
        res.send(deleteRecord)
    }catch(err){
        res.status(500).send(err);//server error
    }
})


router.delete("/mens/:id",async (req,res)=>{
    try{
        const _id=req.params.id
        const getRecord=await MensRanking.findByIdAndDelete({_id:_id})
        res.send(getRecord)
    }catch(err){
        res.status(500).send(err);//server error
    }
})

module.exports=router;