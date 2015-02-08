"use strict";
var fs = require('fs');
var bodyParser = require('body-parser');
var app = require('express')();
app.use(bodyParser.json());

//inicio en localhost
app.get('/', function(req, res) {
    res.send('<h1>tp19</h1>');
});

//entramos a localhost/ejemplo.txt
app.get('/:archivo', function(req, res) {
    fs.readFile(req.params.archivo, function(err, file) {
        if (err) {
            res.status(404).send(err);
            return;
        }
        res.set('Content-Type', 'application/json');
        res.send(file);
    });
});

//verifica si la ruta /directorio1 existe, si no, tira error 404
app.get('/:directorio1', function(req, res) {
    fs.readdir(req.params.directorio1, function(err, data) {
        if (err) {
            res.status(404).send(err);
            return;
        }
        res.send(req.params.directorio1);
    });
});

//verifica si la ruta /directorio1/directorio2 existe, si no, tira error 404
app.get('/:directorio1/:directorio2', function(req, res) {
    fs.readdir(req.params.directorio1+'/'+req.params.directorio2, function(err, data) {
        if (err) {
            res.status(404).send(err);
            return;
        }
        res.send('algo se creo!');
    });
});

//verificammos si existen los directorios y el archivo ejemplo.txt, si no, tira error 404
app.get('/:directorio1/:directorio2/:archivo', function(req, res) {
    fs.readdir(req.params.directorio1+'/'+req.params.directorio2+'/'+req.params.archivo, function(err, data) {
        if (err) {
            res.status(404).send(err);
            return;
        }
        res.send(data);
    });
});

app.post('/:archivo', function(req, res) {
    fs.readFile(req.params.archivo, function(err, data) {
        if (err) {
            res.status(404).send(err);
            return;
        }
        res.set('Content-Type', 'application/json');
        fs.writeFile(req.params.archivo,req.body.archivo, function(err) {
            if (err) {
                res.status(404).send('error');
                return;
            }
            res.send('ok');
        });
    });
});

app.post('/:directorio1', function(req, res) {
    fs.mkdir(req.params.directorio1);
});

app.post('/:directorio1/:directorio2', function(req, res) {
    fs.mkdir(req.params.directorio1);
    fs.mkdir(req.params.directorio1+'/'+req.params.directorio2);
});

app.post('/:directorio1/:directorio2/:archivo', function(req, res) {
    fs.mkdir(req.params.directorio1);
    fs.mkdir(req.params.directorio1+'/'+req.params.directorio2);
    fs.writeFile(req.params.directorio1+'/'+req.params.directorio2+'/'+req.params.archivo, req.body.archivo);
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