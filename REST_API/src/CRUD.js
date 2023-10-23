const express=require('express')
const dotenv=require('dotenv')
require("./db/connection.js")//requiring connection file
const Student=require("./models/students")
const studentRouter=require('./routers/student.js');
const app=express()
//const port=process.env.PORT;
const host=process.env.HOST;
app.use(express.json())

dotenv.config({path:"../config/config.env"})
app.use('/students',studentRouter)

app.listen(3030,host,(err)=>{
    if (err) throw err;
    console.log(`listening to the port number 3030`)
})