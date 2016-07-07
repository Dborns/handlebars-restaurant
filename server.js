
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express(); 
var PORT = process.env.PORT || 8080; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var tables = require('./app/data/table-data.js');


var hbs = require('express-handlebars');


app.engine('handlebars', hbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');



app.get('/tables', function(req,res) {
    res.render('index', tableArray);
});

app.get('/reserve', function(req,res) {
    res.render('index', waitingArray);
});


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});