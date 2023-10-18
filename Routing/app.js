import express from 'express'
import fs from 'fs'
let app=express()

//to read file data from the postman tool
app.use(express.json())

//API URL:localhost:8000
app.get("/",(req,res)=>{
    res.send({"msg":"Root request"})
})

//API URL:localhost:8000/all
app.get("/all",(req,res)=>{
    const empData=getEmpData()
    res.send(empData)
})

//API URL:localhost:8000/add
app.post("/add",(req,res)=>{
    let employeeData=req.body //whatever the data entered in the postman tool we will get that on the console.
    console.log(employeeData)//object type
    let employees=getEmpData()//object type
    var exist=employees.find((emp)=>{
        return employeeData.id==emp.id
    })
    if (exist){
        return res.send({"msg":"user with the same id already exist"})
    }

    employees.push(employeeData)
    saveEmpData(employees)
    res.send("inserted data successfully...")
});
let saveEmpData=(employees)=>{
    fs.writeFileSync("emp.json",JSON.stringify(employees))
}

let getEmpData=()=>{
    //read json file
    let data=fs.readFileSync("emp.json","utf-8")
    //console.log(typeof data)
    return JSON.parse(data)
}


app.listen(8000,(err)=>{
    console.log("listening.....")
})