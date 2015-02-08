"use strict";
var fs = require('fs');
var bodyParser = require('body-parser');
var app = require('express')();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('hola');
});

app.get('/:archivo', function(req, res) {
    fs.readFile(req.params.archivo, function(err, file) {
        if (err) {
            res.status(404).send('error');
            return;
        }
        var obj = {
            achivo: file.toString()
        };
        res.status(200).json(obj);
    });
});

app.post('/:archivo', function(req, res) {
    fs.writeFile(req.params.archivo, req.body.archivo, function(err) {
        if (err) {
            res.status(404).send('error');
            return;
        }
        res.status(200).send('ok');
    });
});

app.put('/:archivo', function(req, res) {
    fs.exist(req.params.archivo, function(exist) {
        if (exist) {
            fs.writeFile(req.params.archivo,req.body.archivo);
            res.status(200).send('ok');
        } else {
            res.status(404).send('error');
        }
    });
});

var server = app.listen(80, function() {
    var host = server.address().address;
    var port = server.address().port;

    //guardo el tiempo en el que se arrancó el server
    var tiempo = new Date();
    var horas = tiempo.getHours();
    var minutos = tiempo.getMinutes();
    var segundos = tiempo.getSeconds();
    console.log(horas + ':' + minutos + ':' + segundos + ' Arrancó el sérver');
});