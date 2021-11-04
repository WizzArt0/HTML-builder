const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'text.txt')

const myReadStream = fs.createReadStream(fileName, 'utf-8');

myReadStream.on('data', function(chunk){
    console.log(chunk);
})