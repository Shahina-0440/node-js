const express=require('express')
const dotenv=require('dotenv')
require("./db/connection.js")//requiring connection file
const Student=require("./models/students")

const app=express()

app.use(express.json())
dotenv.config({path:"../config/config.env"})
const port=process.env.PORT;
const host=process.env.HOST;


//reading students data
app.patch("/students/:id",async (req,res)=>{
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

app.listen(port,host,(err)=>{
    if (err) throw err;
    console.log(`listening to the port number ${port}`)
})