var buf1 = Buffer.from('Hello');
var buf2 = Buffer.from("World");
var buf2 = Buffer.concat([buf1, buf2]);
console.log(buf2.toString());


for(var pair of buf2.entries()) {
  console.log(pair[0]);
  console.log(pair[1].toString());
}
