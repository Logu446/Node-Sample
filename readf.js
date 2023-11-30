const fs=require('fs');

var data=fs.readFileSync('new.txt');

console.log(data.toString());