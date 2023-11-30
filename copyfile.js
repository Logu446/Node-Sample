var fs=require('fs');

var data=fs.readFileSync('new.txt');

fs.writeFile('output.txt',data,function(err){
    if(err){
     console.error(err);
    }
    console.log('data written');
}
      
);