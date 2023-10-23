const express=require('express')
const dotenv=require('dotenv')
require("./db/connection.js")//requiring connection file
const Student=require("./models/students")

const app=express()
dotenv.config({path:"../config/config.env"})
const port=process.env.PORT;
const host=process.env.HOST;
//students creation page--to add the students

app.use(express.json())//to recognize the incoming request as a json object
app.post("/students",async (req,res)=>{
    try{    
        console.log(req.body);
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser)
    }catch(err){
        res.status(400).send(err)
    }


})


app.listen(port,host,(err)=>{
    if (err) throw err;
    console.log(`listening to the port number ${port}`)
})