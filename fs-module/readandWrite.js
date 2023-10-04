const fs=require('fs');
var data=fs.readFile("data.txt",'utf-8',(err,data)=>{
    if (err) throw err;
    fs.writeFile('emp.txt',data,(err)=>{
        if (err) throw err;
        console.log("written asynchronously");

    })

})