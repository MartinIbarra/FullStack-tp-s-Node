"use strict";
var fs = require('fs');
//intento identificar las vocales y pasarlas a mayuscula
function identificarVocal(text){
	var mayuscula = text.toString();
	mayuscula = mayuscula.replace(/a/g,'A').replace(/e/g,'E').replace(/i/g,'I').replace(/o/g,'O').replace(/u/g,'U');
	return mayuscula;
}
//leo el archivo
fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        throw err;
    }
    var res = identificarVocal(data);
    //creo el archivo tempMayus.txt y le escribo la data
    fs.writeFile('tempMayus.txt',res,function(err){
    	if(err){
    		throw err;
    	}    	
    });
});