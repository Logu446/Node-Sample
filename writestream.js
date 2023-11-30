const fs=require ('fs');

const data='simply and easy learning';

var writery=fs.createWriteStream('new.txt');

writery.write(data,'utf-8');

writery.end();

