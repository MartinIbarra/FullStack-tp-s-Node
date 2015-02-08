var miModulo = require('./miModulo.js');
function ejecutarModulo(){
	var path = process.argv[2];
	var ext = process.argv[3];

	miModulo(path, ext, function(err,data) {
		if(err){
			throw err;
		}
		data.forEach(function(i){
			console.log(i);
		});
	});
}
ejecutarModulo();