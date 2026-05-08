const Promise = require('bluebird');

console.log("Start");

Promise.delay(5000).then(()=>{
    console.log("Data after delay 5 seconds")
})

console.log("End");