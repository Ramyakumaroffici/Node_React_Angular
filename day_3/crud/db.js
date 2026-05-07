const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mytraining');

const db =mongoose.connection;


//DB errors can happen anytime → so use on
db.on('error',()=>{
    console.log("Mongodb connection error");
});


//DB connects only once → so use once
db.once('open',()=>{
    console.log("database connected Successfully");

});

module.exports=mongoose;

/*Feature	              on()	                 once()
Runs how many times?	Multiple times	      Only once
Used for	             Repeated events	  One-time events
Example	                Errors,data events	  Initial connection*/