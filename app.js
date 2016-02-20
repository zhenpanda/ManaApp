var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Mongoose Connect
mongoose.connect('mongodb://localhost/manabasehelper');
var db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send("harro world");
});

app.listen(1374);
console.log("listening on port 1374 captain")