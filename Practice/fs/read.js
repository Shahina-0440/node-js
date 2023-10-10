const fs=require('fs');
fs.readFile("one.txt","utf-8",(err,data)=>{
    console.log(data)
})
