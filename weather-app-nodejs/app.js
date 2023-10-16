const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const requests = require('requests');

const homeFile = fs.readFileSync('home.html', 'utf-8');

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace('{%tempval%}', orgVal.main.temp);
    temperature = temperature.replace('{%tempmin%}', orgVal.main.temp_min);
    temperature = temperature.replace('{%tempmax%}', orgVal.main.temp_max);
    temperature = temperature.replace('{%location%}', orgVal.name);
    temperature = temperature.replace('{%country%}', orgVal.sys.country);
    temperature = temperature.replace('{%tempStatus%}', orgVal.weather[0].main);

    return temperature;
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const parsedQuery = querystring.parse(parsedUrl.query);
    if (parsedUrl.pathname === '/') {
        if (parsedQuery.name) {
            requests(`https://api.openweathermap.org/data/2.5/weather?q=${parsedQuery.name}&units=metric&appid=YOUR_API_KEY`)
                .on('data', (chunk) => {
                    const objdata = JSON.parse(chunk);
                    const arrData = [objdata];
                    const realTimeData = arrData
                        .map((val) => replaceVal(homeFile, val))
                        .join('');
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(realTimeData);
                    res.end();
                })
                .on('end', (err) => {
                    if (err) return console.log('connection closed due to errors', err);
                });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(homeFile);
            res.end();
        }
    }
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
