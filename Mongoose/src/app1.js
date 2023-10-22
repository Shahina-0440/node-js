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
        const empDetails=new Emp({
            name:"Baba",
            gender:"Male",
            sal:50000,
            status:true
        })
        const result=await empDetails.save();
        console.log(result)
    }
    catch (err){
        console.log(err)
    }

}
createDocument()


