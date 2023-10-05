const fs=require('fs');
let data=fs.readFile('emp.json','utf-8',(err,data)=>{
    console.log(data)
    console.log(typeof data)//string type
    let emp_obj=JSON.parse(data)
    console.log(typeof emp_obj)
    for (j of emp_obj){
        console.log(j);
        console.log(j['eid'])
    }

})