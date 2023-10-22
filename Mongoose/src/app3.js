const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/database1").then(()=>{
    console.log("successful...")
}).catch((err)=>{
    console.log(err)
})

//defining the structure of the document
const empSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gender:String,
    sal:Number,
    status:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

//mongoose model
const Emp=new mongoose.model("Emp",empSchema)
//create document or insert

const createDocument=async ()=>{
    try{
        const empDetails1=new Emp({
            name:"rahul",
            gender:"Male",
            sal:50000,
            status:false
        })
        const empDetails2=new Emp({
            name:"sonia",
            gender:"Female",
            sal:50000,
            status:false
        })
        const result=await Emp.insertMany([empDetails1,empDetails2]);
        console.log(result)
    }
    catch (err){
        console.log(err)
    }

}
createDocument()


