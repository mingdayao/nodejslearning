var fs = require('fs')
const writer = fs.createWriteStream('newinput.txt');
const data = 'hello world';

writer.write(data);
writer.end();

writer.on('finish', () => {
  console.log('data written done!')
})

writer.on('error', (err) => {
  console.error(err);
})

console.log("Program End!");
