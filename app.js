var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./model/book.model')

//Mongoose Connect
var db = 'mongodb://localhost/manabasehelper';
mongoose.connect(db);

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send("harro world");
});

app.get('/check', function(req, res) {
	Book.find({}).exec(function(err, result) {
		if(err) {
			res.send('error here.')
		}else{
			res.json(result);
		}
	})
});

var port = 3000;
app.listen(port, function() {
	console.log("listenin on port:" + port);
})