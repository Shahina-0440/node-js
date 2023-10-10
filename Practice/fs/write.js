const fs=require('fs');
fs.readFile("one.txt","utf-8",(err,data)=>{
    fs.writeFile("two.txt",data,()=>{
        console.log("written succesfully")
    })
})