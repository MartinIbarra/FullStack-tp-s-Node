"use strict";
var modulo = require('./modulo.js');
var dir;

modulo.on('readFileResult', function (data){
	console.log(data);
});

modulo.on('readdirResult',function (data){
	console.log(data);
});

modulo.emit('readdir','./dir');

modulo.emit('readFile', 'temp.txt');