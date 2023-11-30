const fs=require('fs');
const data=fs.readFileSync('new.txt');
console.log(data.toString());