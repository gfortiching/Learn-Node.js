//Reading a File Asynchronously using nodejs
const fs = require('fs');

const data = 'This is a sample text file.';

fs.readFile('data.txt', (err, data) => {
	if (err) 
		throw err;
		
	console.log("Content :  " + data);
	console.log("The file was read successfully.");
});