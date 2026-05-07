const amqp = require('amqplib');
let channel;

const queue ="User added successfully";
const url ="amqps://vqkbvfie:o8qk6WZt0jl-HM-1XlTKQ5wBwBKaCaPD@leopard.lmq.cloudamqp.com/vqkbvfie";



async function connect(){
    try{
        const connection = await amqp.connect(url);
        channel = await connection.createChannel();
        await channel.assertQueue(queue,{durable:true});


        console.log("User service connected to cloudamqp");
    }
    catch(error)
    {
        console.log("Connection Failed");
    }
}

function publish(data){
    if(!channel)
    {
        console.log("channel not recognized");
        return;
    }
    else{
        channel.sendToQueue(queue,Buffer.from(JSON.stringify(data)),{persistent:true});
    }
    console.log("User added and event published");
}

module.exports={connect,publish};