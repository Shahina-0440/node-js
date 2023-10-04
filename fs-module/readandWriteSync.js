const fs=require('fs');
var data=fs.readFileSync("data.txt",'utf-8');
fs.writeSync('emp.txt',data);
console.log("data has been written");