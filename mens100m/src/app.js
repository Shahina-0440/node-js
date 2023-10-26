const express=require('express');
const app=express();
app.use(express.json())
const port=3000;
const MensRanking=require("./models/mensSchema")
const router=require('../src/routers/men');
require("./db/connect.js")

app.use(router);

app.listen(port,()=>{
    console.log("listening to the port number 3000")
})
