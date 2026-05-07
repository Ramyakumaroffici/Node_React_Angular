const Promise = require('bluebird');
console.log("Start");
Promise.delay(5000).then(() => {
    console.log("Data after delay 5 seconds")
})
console.log("End");
Promise.map([1, 2, 3], num => {
    return num * 2;
}).then(result => console.log(result))
const users = ['A', 'B', 'C'];
Promise.map(users, user => {
    return Promise.delay(1000).then(() => {
        console.log("Processing", user);
        return user + 'done';
    })
}).then(result => console.log("Final: ", result));