const mongoose = require('./db');


//A Schema defines the structure of your data.
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User= mongoose.model('employee',userSchema);
module.exports=User;
