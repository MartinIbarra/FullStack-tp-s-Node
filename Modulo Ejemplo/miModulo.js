"use strict";
module.exports = function(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    var resultado = [];

    fs.readdir(dir, function(error, arr) {
    	if(error){
    		return callback(error);
    	}
        arr.forEach(function(archivo) {
            if (path.extname(archivo) === '.' + ext) {
                resultado.push(archivo);
            }
        });
        callback(undefined, resultado);
    });
};