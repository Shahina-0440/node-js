const express=require('express');
const router=express.Router();
const Student=require("../models/students")

router.get("/",async (req,res)=>{
    try{
        const studentsData=await Student.find();
        res.send(studentsData)
    }catch(err){
        res.send(err)
    }

})

router.post("/create",(req,res)=>{
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((err)=>{
        res.status(400).send(err);
    });//to save the data in the database
    
})

router.patch("/update/:id",async (req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudent=await Student.findByIdAndUpdate(_id,req.body,{
            new:true//new means..it will show after updated data
        });
        res.send(updateStudent)
    }catch(err){
        res.status(404).send(err)
    }

})

router.delete("/delete/:name",async (req,res)=>{
    try{
        const name=req.params.name;
        const deleteStudent=await Student.deleteOne({name:name})
        if (deleteStudent.deletedCount === 0){//i added here [0] because i am getting [].in that case it will true so...
            res.status(404).send("student with that name not present")
        }else{
            res.send(deleteStudent)
        }
        
    }catch(err){
        res.status(500).send(err)
    }

})
module.exports=router;