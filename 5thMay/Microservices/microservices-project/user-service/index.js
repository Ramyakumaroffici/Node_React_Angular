const express = require('express');

const mongoose = require('mongoose');

const bodyparser = require('body-parser');

const cors = require('cors');

const User = require('./models/User');

const {connect,publish} = require('./rabbit');

const app = express();
app.use(cors());

app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/micro')
.then(()=>console.log("database connected successfully"));

connect();

app.post('/users',async(req,res)=>{
    const user = new User(req.body);
    await user.save()
    publish(user);
    res.status(201).send(user);

});

app.get('/users',async(req,res)=>{
    const users = await User.find();
    res.send(users);


});

app.listen(3001, () => console.log("User service is running at port 3001"));







