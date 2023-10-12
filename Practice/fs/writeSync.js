const fs=require('fs');
var data=fs.readFileSync("one.txt",'utf-8');
var file=fs.writeFileSync("three.txt",data);
