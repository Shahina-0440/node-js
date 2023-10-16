const http =require('http');
const fs =require('fs');
const requests=require('requests')

const homeFile=fs.readFileSync("home.html","utf-8");

const replaceVal=(tempVal,orgVal)=>{
    let temperature =tempVal.replace("{%tempval%}",orgVal.main.temp);
     temperature =temperature.replace("{%tempmin%}",orgVal.main.temp_min);
     temperature =temperature.replace("{%tempmax%}",orgVal.main.temp_max);
     temperature =temperature.replace("{%location%}",orgVal.name);
     temperature =temperature.replace("{%country%}",orgVal.sys.country);
     temperature =temperature.replace("{%tempStatus%}",orgVal.weather[0].main);

     
     return temperature;
}

const server=http.createServer((req,res)=>{
    if (req.url=="/"){
    requests('https://api.openweathermap.org/data/2.5/weather?q=Bengaluru,IN&units=metric&appid=9fc7c4e3076998d8edc44474770ddcef')//API URL in celcius
    .on('data',  (chunk)=> {
        const objdata=JSON.parse(chunk);//convertng to JSON format because the chunk data is JS object
        const arrData=[objdata]; //converting into Array of JSON
        //console.log(arrData[0].main.temp)//because the temperature is in the first index and in the main key....see the data once
        //console.log(arrData)
        const realTimeData=arrData
            .map((val)=> replaceVal(homeFile,val))
            .join("");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(realTimeData)
        console.log(arrData)
       // res.write(realTimeData); it is map object so use join()
    })
    .on('end', (err)=> {
      if (err) return console.log('connection closed due to errors', err);
      res.end();
    });
    }
})

server.listen(8000);
