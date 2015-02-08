"use strict";
var fs = require('fs');
var express = require('express');
var app = express();
app.get('/',function(req, res){
	fs.readFile('index.html',function(err,file){
		res.set("Content-Type","text/html");
		//if(err){
		//	res.send(err);
		//	res.end();
		//	return;
		//}
		res.send(file);
		res.end();
	});
	//res.end();
});

app.get('/usuarios',function(req,res){
	fs.readFile('temp.txt',function(err,file){
		if(err){
			res.end();
			return;
		}
		res.send(file);
	});
	res.end();
});

app.get('/usuarios/:user',function(req,res){
	res.send('pediste un get a: '+ req.params.user);
});

var server = app.listen(80,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('ejemplo de express ');
});