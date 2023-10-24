const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/runnersData")
.then(()=>{
    console.log("connecting.....")
}).catch((err)=>{
    console.log(err)
})