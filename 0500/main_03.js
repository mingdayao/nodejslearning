var buf=Buffer.alloc(256);
buf.write('this\'s michael');

console.log(Buffer.byteLength(buf));
console.log(buf.toString());
