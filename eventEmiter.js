"use strict";
var events = require('events');

var eventEmitter = new events.EventEmitter();

//esto es un listener 1 
eventEmitter.on('data',function fn2(a,b){
	console.log('hello');
	console.log(a);
});

//esto es otro listenner 2
eventEmitter.on('data',function fn1(a,b){
	console.log('world');
	console.log(b);
});

//aca se emite el evento
eventEmitter.emit('data', 1,2);

//ver los listeners
//console.log(eventEmitter.listeners('data'));