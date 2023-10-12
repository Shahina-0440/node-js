const fs=require('fs');
var data=fs.readFileSync("emp.json","utf-8");
var jsonfile=fs.writeFileSync("emp1.json",data);
var jsfile=fs.writeFileSync("emp2.js",data);
var res=fs.readFileSync("emp")
