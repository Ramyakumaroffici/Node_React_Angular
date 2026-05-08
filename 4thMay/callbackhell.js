
const fs = require('fs');
const Promise = require('bluebird');


//---------Callback Hell-----------------------------------//
/*fs.readFile('script1.txt','utf8',(err,data1)=>{
    fs.readFile('script2.txt','utf8',(err,data1)=>{
         fs.readFile('script3.txt','utf8',(err,data1)=>{
    
});
    
});
});*/


// to avoid the callback hell we use Promise

//value that will be available in future

//Pending, Fullfilled , Reject

//------------------------------------------------------------

/*const promise = new Promise ((resolve,reject)=>{

    let success = false;

    if(success) resolve("Done");
    else reject("Error");
});

promise.then(res=>console.log(res))
.catch(err=>console.log(err))*/


//---------------Bluebird- promise library for the node js environment

/*enhances Js promises with extra features */



const fsAsync = Promise.promisifyAll(fs);
fsAsync.readFileAsync('file.txt','utf-8')
.then(data=>console.log(data))
.catch(err=>console.error(err))