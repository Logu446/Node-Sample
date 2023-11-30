const fs = require('fs');

const filePath = 'output.txt';
const newLength = 10; // Set the new length to which you want to truncate the file

fs.truncate(filePath, newLength, (err) => {
  if (err) {
    console.error(`Error truncating file: ${err}`);
  } else {
    console.log('File truncated successfully.');
  }
});
