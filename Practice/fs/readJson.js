const fs=require('fs');
var data=fs.readFileSync("emp.json","utf-8");
var jsobj=JSON.parse(data)
console.log(data)
console.log(typeof data)
console.log(jsobj)
console.log(typeof jsobj)