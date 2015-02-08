"use strict";
var fs = require('fs');
var http = require('http');
var app = require('express')();

app.get('/',function(req, res){
	fs.readFile('index.html',function(err,file){
		if(err){
			res.status(404).send('error');
			console.log('el archivo '+file+'tubo el siguiente error: '+err);
			return;
		}
		res.send(file.toString());
	});
});

var server = app.listen(80,function(){
	var host = server.adress().adress;
	var port = server.adress().port;

    var tiempo = new Date();
    var horas = tiempo.getHours();
    var minutos = tiempo.getMinutes();
    var segundos = tiempo.getSeconds();
    console.log(horas + ':' + minutos + ':' + segundos + ' Arrancó el sérver');

});