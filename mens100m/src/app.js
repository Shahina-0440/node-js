const express=require('express');
const app=express();
app.use(express.json())
const port=3000;
const MensRanking=require("./models/mensSchema")
require("./db/connect.js")

app.post("/mens",async (req,res)=>{
    try{
        const addingMensRecords=await new MensRanking(req.body);
        const addingRecord=await addingMensRecords.save()
        res.send(addingRecord)
    }catch(err){
        console.log(err)
    }
})


app.listen(port,()=>{
    console.log("listening to the port number 3000")
})
