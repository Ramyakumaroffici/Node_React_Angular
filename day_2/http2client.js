const http2 = require('http2');

const client = http2.connect('http://127.0.0.1:8081');

const req = client.request({'method':"GET","path":"/"});

let data1='';

req.on('response',(requestHeaders)=>{
    console.log("fetching data from the server");
});

req.on('data',(chunk)=>{
    data1=data1+chunk;
});

req.on('end',()=>{
    console.log(data1);
    client.destroy();
});