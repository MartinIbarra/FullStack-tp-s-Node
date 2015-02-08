"use strict";
var fs = require('fs');
var modulo = require('events').EventEmitter;

modulo.on('readFile',function (str){
	fs.readFile(str,function (err, res){
		if(err){
			return err;
		}
		return modulo.emit('readFileResultado',res);
	});
});

modulo.on('readdir',function (data){
	fs.readdir(data,function (err, res){
		if(err){
			return err;
		}
		return modulo.emit('readdirResult', res);
	});
});

module.exports = modulo;