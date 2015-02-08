"use strict";
var http = require('http');
var options = {};
var proxy = http.createServer(function(req, res) {
    options.method = 'GET';
    options.host = 'www.google.com.ar';
    options.path = req.url;
    console.log(req);
    http.request(options,function(response){
        response.pipe(res);
    }).end();
}).listen(80);