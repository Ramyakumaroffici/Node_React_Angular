const User = require('./userModel');

User.deleteOne({
    email:"ramya@gmail.com"
})
.then(data=>{
    console.log("Deleted data",data);
})
.catch(error=>{
    console.log(error);
})
