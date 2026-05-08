const user = require('./userModel');

user.updateOne({
    name:"Alexa"
},{email:"ramya@gmail.com"})

.then(res=>{
    console.log("Updated response",res);
})
.catch(error=>{
    console.log(error);
});
