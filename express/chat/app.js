"use strict";
var express = require('express.io'),
	port = 80,
	app = express();

app.http().io();
// Setup your sessions, just like normal.
app.use(express.cookieParser());
app.use(express.session({secret: 'monkey'}));

// Session is automatically setup on initial request.
app.get('/', function(req, res) {
    req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/public/index.html');
});

// Setup a route for the ready event, and add session data.
app.io.route('ready', function(req) {
    req.session.name = req.data;
    req.session.save(function() {
        req.io.emit('get-feelings');
    });
});

app.io.route('chatMessage',function(req){
	debugger;
	req.io.broadcast('chatMessage', {
        msj: req.data
    });
});

// Send back the session data.
app.io.route('send-feelings', function(req) {
    req.session.save(function() {
        req.io.emit('session', req.session);
    });
});

app.io.route('disconect',function(req){
	console.log(req.toArray());
});

app.listen(port, function() {
    console.log('server corriendo en el puerto: ' + port);
});