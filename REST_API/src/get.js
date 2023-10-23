const express=require('express')
const dotenv=require('dotenv')
require("./db/connection.js")//requiring connection file
const Student=require("./models/students")

const app=express()
dotenv.config({path:"../config/config.env"})
const port=process.env.PORT;
const host=process.env.HOST;


//reading students data
app.get("/students",async (req,res)=>{
    try{
        const studentsData=await Student.find();
        res.send(studentsData)
    }catch(err){
        res.send(err)
    }

})

app.listen(port,host,(err)=>{
    if (err) throw err;
    console.log(`listening to the port number ${port}`)
})