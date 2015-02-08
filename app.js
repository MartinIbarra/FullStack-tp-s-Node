"use strict";
var fs = require('fs');
var express = require('express');
var app = express();
app.get('/',function(req, res){
	res.send('hello world');
});

app.get('/usuarios/:user',function(req,res){
	res.send('pediste un get a: '+ req.params.user);
});

var server = app.listen(80,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('ejemplo de express ');
});