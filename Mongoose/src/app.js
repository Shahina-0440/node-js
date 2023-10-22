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
const empDetails=new Emp({
    name:"Shahina",
    gender:"Female",
    sal:50000,
    status:true
})

empDetails.save();
