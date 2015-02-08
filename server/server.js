"use strict";
var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    //res.write('hola');
    response.writeHead(200, {
        "Content-Type": "text/html",
        "sarasa": "1"
    });
    //res.write('hola');
    console.log(request.url);
    //res.writeHead(404);
    if (request.url === '/') {
        fs.readFile('index.html', function(err, file) {
            if (err) {
                response.writeHead(404);
                response.end();
                return;
            }
            response.write(file.toString());
            response.end();
        });
    }
    if (request.url.indexOf('.') !== -1) {
        fs.readFile(request.url.replace('/', ''), function(err, file) {
            if (err) {
                response.writeHead(404);
                response.end();
                return;
            }
            response.write(file.toString());
            response.end();
        });
    } else {
        if (request.url === '/usuarios') {
            response.writeHead(200, {
                "Content-Type": "application/json"
            });
            response.write('["user1","user2","user3"]');
            response.end();
        }
    }

    //response.write('<html><body><div><p>loquesea</p></div></body></html>');

});

server.listen(8888, function() {
    console.log('server inicializado');
});