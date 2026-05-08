/*with the help of http module we can create web server. and via http protocal
we can manage request and response.*/

let http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Welcome to the world of Web server!');
}).listen(8086);

console.log('Server running at http://localhost:8086/');
