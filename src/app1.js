const express=require('express');
const path=require('path')
const requests=require('requests')
const app=express();

//const staticpath=path.join(__dirname,"../portofolio");
//app.use(express.static(staticpath))

app.get("/",(req,res)=>{
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=9fc7c4e3076998d8edc44474770ddcef`)//API URL in celcius
    .on('data',  (chunk)=> {
        const objdata=JSON.parse(chunk);//convertng to JSON format because the chunk data is JS object
        const arrData=[objdata]; //converting into Array of JSON
        //console.log(arrData[0].main.temp)//because the temperature is in the first index and in the main key....see the data once
        //console.log(arrData)
        console.log(`city name is ${arrData[0].name} and the temperature ${arrData[0].main.temp}`)

    })
    .on('end', (err)=> {
      if (err) return console.log('connection closed due to errors', err);
      res.end();
    });
})
app.listen(8080,()=>{
    console.log("listening...")
})