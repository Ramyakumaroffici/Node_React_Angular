const User = require('./userModel');

User.insertMany([
    {
        name:"Alexa",
        email:"alexa@gmail.com",
        age:24

    },
    {
        name:"Alex",
        email:"alex@gmail.com",
        age:21
    },
    {
        name:"Siri",
        email:"siri@gmail.com",
        age:29
    }
])
.then(users=>{
    console.log("Employee added Successfully",users);
})
.catch(error=>{
    console.log(error);
})

/*When this succeeds, it returns the inserted documents from MongoDB.

👉 That returned value is automatically passed into .then().

So internally it works like: 

insertMany([...]).then(function(returnedValue) {
    // users = returnedValue
}); 

users is not predefined
It is just a name you give
It stores the result returned by the Promise


*/

