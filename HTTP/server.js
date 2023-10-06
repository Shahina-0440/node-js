const http=require('http')
 
let server=http.createServer((request,response)=>{
    response.end("Good Evening")
})
server.listen(8080,"1027",(err)=>{
    if (err) throw err
    console.log("server is listening")
})