var fs = require('fs');

//asynchronous way
fs.readFile('input.txt', function(err, data) {
  if(err) console.error(err);
  console.log(data.toString()); //by default it will return Buffer
  //be in minder, in nodejs we use Buffer to read/write from file/socket	
})

//synchronous way
var data = fs.readFileSync('input.txt')
console.log(data.toString());

console.log('Program End!');
