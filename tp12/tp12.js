var pid = process.argv[2];
console.log("el pid eliminado fué: " + pid);
process.kill(pid);
