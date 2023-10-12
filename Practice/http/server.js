const http=require('http');
const server=http.createServer((req,resp)=>{
    console.log(resp.end("yes i am here"))
})
server.listen(8080,(err)=>{
    if (err) throw err
    console.log("server listening......")
})