"use strict";
var net = require('net');
var mjsRecibido = '';
var options = {
	port: 8888,
	host:'localhost'
};
var client = net.connect(options ,function(){
	client.write('coderhouse\n');
});
client.on('data',function(data){
	mjsRecibido = data.toString();
	client.write(mjsRecibido.toString());
	console.log(mjsRecibido.toString());
});
client.on('end',function(){
	console.log('me fui');
	client.end();
});