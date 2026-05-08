const a = require('readline');
const rl = a.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("What is your favorite technology? ",(answer) => {
    console.log(`Your favorite technology is ${answer}`);
    rl.close();

});