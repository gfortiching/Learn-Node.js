var fs = require('fs');
var filename = 'newData.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');