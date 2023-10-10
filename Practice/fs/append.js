const fs=require('fs');
fs.appendFile("two.js","Appended data into two.js",()=>{
    console.log("appended")
})