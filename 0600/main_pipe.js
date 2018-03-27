var fs = require('fs');

const reader = fs.createReadStream('input.txt');
const writer = fs.createWriteStream('input2.txt');

reader.pipe(writer)

writer.on('finish', () => {
  console.log('finish!');
})

console.log('done');
