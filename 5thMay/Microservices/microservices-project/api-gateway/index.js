const express = require('express');

const axios = require('axios');

const bodyparser = require('body-parser');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyparser.json());

app.post('/api/users', async(req,res)=>{
    const response = await axios.post('http://localhost:3001/users',req.body);
    res.send(response.data);

});

app.get('/api/users', async(req,res)=>{
    const response = await axios.get('http://localhost:3001/users');
    res.send(response.data);

});

app.post('/api/products', async(req,res)=>{
    const response = await axios.post('http://localhost:3002/products',req.body);
    res.send(response.data);

});

app.get('/api/products', async(req,res)=>{
    const response = await axios.get('http://localhost:3002/products');
    res.send(response.data);

});

app.listen(3000,()=>console.log("api gateway is running at port 3000"));


/*
Frontend (Angular/React)
        ↓
API Gateway (Port 3000)
        ↓
 ┌───────────────┬───────────────┐
 ↓               ↓
Users Service   Products Service
(3001)          (3002)


Axios → communicates with other services


*/