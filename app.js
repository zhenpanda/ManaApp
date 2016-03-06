var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');
/*
//Mongoose Connect
var db = 'mongodb://localhost/testDB';
mongoose.connect(db);

var User = require('./model/user').User;
var Item = require('./model/item').Item;
var Comment = require('./model/comment').Comment;
*/

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

var mtgjson = require('mtgjson');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/fetch', function(req, res) {
	mtgjson(function(err, data) {
		if (err) return console.log(err);
	 
		// Prints out all cards from the Limited Edition Alpha (LEA) set 
		//console.log(data.OGW.cards); 

		var ogw = data.OGW.cards;
		//res.send(ogw[0].name);
		res.json(ogw);
		// var count = String(ogw.length);
		// res.send(count);
	});
	//res.send("harro world");
});

/*
app.get('/check', function(req, res) {
	Book.find({}).exec(function(err, result) {
		if(err) {
			res.send('error here.')
		}else{
			res.json(result);
		}
	})
});*/

var port = 3000;
app.listen(port, function() {
	console.log("listenin on port:" + port);
})