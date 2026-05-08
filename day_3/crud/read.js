const User = require('./userModel');

User.find()
.then(users=>{
    console.log("Employee details",users);
})
.catch(error=>{
    console.log(error);
})