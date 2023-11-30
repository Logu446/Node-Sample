const fs=require('fs');

var data='welcome to ksrct';

fs.writeFile('new.txt',data,function(err){
    if(err){
        return console.error(err);
    }
    console.log("DATA WRITTEN");
});
