var fs=require('fs');

fs.unlink('new.txt',function(err){
    if(err){
        console.error(err);
    }
    console.log('deleted the file');
});