"use strict";
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit tortor et velit elementum, vitae laoreet justo vulputate. Donec semper purus nec faucibus iaculis.";
function identificarVocal(text){
	text.toString();
	for(var i=0; i<text.length; i++){
		if(text[i]==="a" || text[i]==="e" || text[i]==="i" || text[i]==="o" || text[i]==="u"){
			var text = text.replace(text[i], text[i].toUpperCase());
		}
	}
	return text;
}
console.log(identificarVocal(text));