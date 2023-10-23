const express=require('express')
const dotenv=require('dotenv')
require("./db/connection.js")//requiring connection file
const Student=require("./models/students")

const app=express()
dotenv.config({path:"../config/config.env"})
const port=process.env.PORT;
const host=process.env.HOST;


//reading students data
app.delete("/students/:name",async (req,res)=>{
    try{
        const name=req.params.name;
        const deleteStudent=await Student.deleteOne({name:name})
        if (!deleteStudent[0]){//i added here [0] because i am getting [].in that case it will true so...
            res.status(404).send("student with that name not present")
        }else{
            res.send(deleteStudent)
        }
        
    }catch(err){
        res.status(500).send(err)
    }

})

app.listen(port,host,(err)=>{
    if (err) throw err;
    console.log(`listening to the port number ${port}`)
})