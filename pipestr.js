var fs=require('fs');

var reader=fs.createReadStream('new.txt');
var writer=fs.createWriteStream('output.txt');

reader.pipe(writer);