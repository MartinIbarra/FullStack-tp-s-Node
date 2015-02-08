"use strict";
var http = require('http');
var fs = require('fs');
var PORT = 80;
var archivo = fs.createWriteStream('response.html');
http.get('http://127.0.0.1:1337',function(response){
  console.log(response.statusCode);
  response.on('data', function(data){
      archivo.write(data.toString());
  }).listen(PORT,function(){
  	console.log('corriendo en el puerto '+PORT);
  });
}).on('error', function(err){
  console.log(err);
});