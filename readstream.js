const fs=require ('fs');

const data='';

const reader=fs.createReadStream('new.txt');

reader.setEncoding('utf-8');

reader.on('data',function(chunk){
     console.log(chunk.toString());
});

