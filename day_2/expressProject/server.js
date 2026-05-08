const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to the world of express JS");

});

//Routing 

app.get('/about',(req,res)=>{
    res.send("My About Component");
})

app.get('/contact',(req,res)=>{
    res.send("My Contact Component");
})

app.get('/services',(req,res)=>{
    res.send("My Services Component");
})

app.get('/gallery',(req,res)=>{
    res.send("My Gallery Component");
})

app.get('/products',(req,res)=>{
    res.send("My products Component");
})

app.listen(3000,()=>console.log("app is running at port 3000"));


/*Browser (client)
      ↓
Express Server
      ↓
Response (HTML / JSON)*/