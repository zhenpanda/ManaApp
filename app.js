var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./model/book.model')
var mtgjson = require('mtgjson');
 


//Mongoose Connect
var db = 'mongodb://localhost/manabasehelper';
mongoose.connect(db);

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	mtgjson(function(err, data) {
		if (err) return console.log(err);
	 
		// Prints out all cards from the Limited Edition Alpha (LEA) set 
		//console.log(data.OGW.cards); 

		var ogw = data.OGW.cards;
		console.log(ogw[0]);
	});
	//res.send("harro world");
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