"use strict";
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("seleccione el pid:",function(){
	rl.close();
});

function killPid(){
	var pid = process.argv[2];
	process.kill(pid);
}