const amqp = require('amqplib');

const Product = require('./models/Product');

const queue="User Added Successfully";

const url="amqps://vqkbvfie:o8qk6WZt0jl-HM-1XlTKQ5wBwBKaCaPD@leopard.lmq.cloudamqp.com/vqkbvfie";

async function consume1()
{
    try{
        const connection = await amqp.connect(url);
        channel = await connection.createChannel();
        await channel.assertQueue(queue,{durable:true});
        console.log("Product service is waiting for the user added event");
        channel.consume(queue,async (msg)=>{
            const user =JSON.parse(msg.content.toString());
            console.log("Event received",user);
            await Product.create({
                name:`welcome ${user.name}`,
                price:0
            });
            console.log("Product created successfully");
            channel.ack(msg);

        });
    }
    catch(error)
    {
        console.log(error);


    }
  
}

module.exports={consume1};