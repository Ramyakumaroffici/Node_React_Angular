let http = require('http');

http.createServer((req,res)=>{
    console.log(req.url);

    if(req.url=='/')
    {
        res.write('Welcome to Home page');
        res.end();
    }
    else if(req.url=='/about')
    {
        res.write('<h1>Welcome to About page</h1> ');
        res.end();
    }
    //create a contact & products ?
    else if(req.url=='/contact')
    {
        res.write('<h1>Welcome to contact page</h1> ');
        res.end();
    }
    else if(req.url=='/product')
    {
        res.write('<h1>Welcome to product page</h1> ');
        res.end();
    }
    else{
        res.write('Page not found');
        res.end();
    }
}).listen(8086);

console.log('Server running at http://localhost:8086/');

