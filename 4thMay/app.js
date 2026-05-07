
const Promise = require('bluebird');
const fs = require('fs');

const fsAsync =Promise.promisifyAll(fs); // convert the callback face to promise face


function readFiles(){
    return fsAsync.readFileAsync('file.txt','utf-8')
    .then(data1 => {
        console.log("File 1",data1);
        return fsAsync.readFileAsync('file1.txt','utf-8')
    }).then(data2=>{
        console.log("File 2",data2);
    })
    .catch(err=>{
        console.error("Error: ",err)
    })
}

readFiles();