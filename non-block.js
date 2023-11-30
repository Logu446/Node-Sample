const fs=require('fs');

fs.readFile('new.txt',function(data,err){
   if (err){
    console.error(err);
   }
   console.log(data.toString());
});
