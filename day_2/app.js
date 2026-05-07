const http2 = require('http2');
//const {stream} =  require('stream');


let server = http2.createServer();

server.on("stream",(stream,requestHeaders)=>{
    stream.respond({'status':200,'content-type':'text/plain'});
    stream.end("response from the server");


}).listen(8081);

console.log("server is running at port 8081");

// with the help of streams we can take single request, response  instead of req,res in http1
