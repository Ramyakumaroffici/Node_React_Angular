const express = require('express');

const mongoose = require('mongoose');

const bodyparser = require('body-parser');

const cors = require('cors');

const Product = require('./models/Product');

const {consume1} = require('./rabbit');


const app = express();

app.use(cors());

app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/micro1')
.then(()=>console.log("Database connected successfully"));

consume1();


app.post('/products',async(req,res)=>{
    const product = new Product (req.body);
    await product.save();
    res.status(201).send(product);
});

app.get('/products',async(req,res)=>{
    const products = await Product.find();
    res.send(products);
})

app.listen(3002,()=>console.log("product service is running at port 3002"));
