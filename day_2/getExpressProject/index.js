/*const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/'+"index.html"); //__dirname it gives the current directory path
});

app.get('/ramya',(req,res)=>{
    response = {
        first_name :req.query.first_name,
        last_name :req.query.last_name
    };

    console.log(response);
    res.send(JSON.stringify(response));
});

app.listen(8087,()=>console.log("app is running at port 8081 http://localhost:8087/"))*/


const express = require('express');

const app = express();

let bodyparser = require('body-parser');

let urlencodedParser = bodyparser.urlencoded({extended:false});
app.use(express.static('public'));


app.get('/index.html',(req,res)=>{
     res.sendFile(__dirname+'/'+"index.html"); //__dirname it gives the current directory path
});

app.post('/ramya',urlencodedParser,(req,res)=>{
    response = {
        first_name :req.body.first_name,
        last_name :req.body.last_name

    };
    console.log(response);
    res.send(JSON.stringify(response));

}).listen(8087);


console.log("server is running at port 8087 http://localhost:8087/");




