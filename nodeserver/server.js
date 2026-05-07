// express and cors are the important dependency to connect frontend and backend
//express act as a middleware between the frontend and backend

const express = require('express');

const cors = require('cors');

const app = express()

app.use(cors());// It will allow the api call (request) from the server 

const users = [
    {id: 1, name:"Peter"},
    {id: 2, name:"Parker"},
    {id: 3, name:"Tony"},
]

app.get('/users', (req,res) =>{
    res.json(users)
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})