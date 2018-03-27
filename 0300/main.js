
var events = require('events');
var eventEmitter = new events.EventEmitter();


var connectHandler = function() {
  console.log('connection successful.');

  eventEmitter.emit('data_received');
}

var dataReceived = function() {
  console.log('data received.');
}


//bind event and event handler
eventEmitter.on('connect', connectHandler);
eventEmitter.on('data_received', dataReceived);

eventEmitter.emit('connect')

console.log('program end')
