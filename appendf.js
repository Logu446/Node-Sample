var fs=require('fs');

var data='this content of appending';

fs.appendFile('output.txt',data,function(err){
    if(err){
        console.log(err);
    }
    console.log('Data is Appended in the File');
});