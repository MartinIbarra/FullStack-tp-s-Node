"use strict";
var	express = require('express'),
 	exphbs = require('express-handlebars'),
 	bodyParser = require('body-parser'),
 	routes = require('./routes/index'),
 	users = require('./routes/users'),
	chat = require('./routes/chat'),
	app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.use(bodyParser.json());

app.use(function(req,res,next){
	console.log(req.method);
	console.log(req.path);
	next();
});

app.use('/',routes);

app.use('/users',users);

app.use('/chat',chat);

app.use(function(req,res,next){
	res.render('error',{
		error:'este es el mensaje de error'
	});
});

app.listen(80);