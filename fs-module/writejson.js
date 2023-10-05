const fs=require('fs')
let emp={
    id:101,
    name:"shahina"
};

let read=fs.writeFile('user.json',JSON.stringify(emp),(err,data)=>{
    console.log("success");
})