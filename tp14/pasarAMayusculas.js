"use strict";
var fs = require('fs');
//intento identificar las vocales y pasarlas a mayuscula
function identificarVocal(text){
	text.toString();
	//for(var i = 0; i < text.length; i++){
	//	if(text[i]==="a"|| text[i]==="e" || text[i]==="i" || text[i]==="o" || text[i]==="u"){
	//		text[i].toUpperCase();
	//	}
	//}
}
//leo el archivo
fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        throw err;
    }
    //ejecuto la funcion
    identificarVocal(data);
    //creo el archivo tempMayus.txt y le escribo la data
    fs.writeFile('tempMayus.txt',data,function(err){
    	if(err){
    		throw err;
    	}    	
    });
});