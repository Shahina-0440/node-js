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
//read document
const getdata=async ()=>{
    const result=await Emp.find();
    const result2=await Emp.find({status:true}).select({_id:0,name:1}).count()
    console.log(result)
    console.log(result2)
}

getdata()