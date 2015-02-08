"use strict";
var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function(res) {
    //console.log(res);
    res.on('data', function(data) {
        //console.log(data.toString());
        //console.log(url1);
    });
    res.on('end', function() {
        console.log('url1 termino');
    });
});

http.get(url2, function(res) {
    res.on('data', function(data) {
        //console.log(data.toString());
        //console.log(url2);
    });
    res.on('end', function() {
        console.log('url2 termino');
    });
});

http.get(url3, function(res) {
    res.on('data', function(data) {
        //console.log(data.toString());
        //console.log(url3);
    });
    res.on('end', function() {
        console.log('url3 termino');
    });
});