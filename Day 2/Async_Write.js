//Writing a File Asynchronously using nodejs
var fs =  require('fs');
var content= "Break down ambitious goals to manageable tasks and decisions then create marginal improvements in your daily routine.";
fs.writeFile('data.txt', content , (err) => {
	if (err) 
		throw err;
	console.log("It's saved.");
});