var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');

/*Mongoose Connect*/
var mongoose = require('mongoose');
var db = 'mongodb://localhost/sealedDB';
mongoose.connect(db);

var Card = require('./model/card').Card;
var Deck = require('./model/deck').Deck;

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

//home test page
app.get('/', function(req, res) {
	res
	.render('index');
});
//edit cards page 
app.get('/edit', function(req, res) {
	res.render('edit');
});
//save deck page
app.get('/deck', function(req, res) {
	res.render('deck');
});

app.get('/fetch', function(req, res) {
	mtgjson(function(err, data) {
		if (err) return console.log(err);
	 
		// Prints out all cards from the Limited Edition Alpha (LEA) set 
		//console.log(data.OGW.cards); 

		var ogw = data.OGW.cards;
		var bfz = data.BFZ.cards;
		var block = ogw.concat(bfz);

		//res.send(ogw[0].name);
		res.json(block);
		// var count = String(ogw.length);
		// res.send(count);
	});
	//res.send("harro world");
});

// app.get('/note', function(req, res) {
// });

app.post('/save', function(req, res) {
	//console.log(req.body);
	//console.log(req.body['deckList[]']);
    var newDeck = new Deck({
	    dateTime: req.body.date,
	    deckName: req.body.name,
	    notes: req.body.note,
	    deckList: req.body['deckList[]'],
	    creator: req.body.maker
    });
    newDeck.save(function(err) {
        if (err) return (err)
        res.send("done");
    });
});

//find by date
app.get('/findDate', function(req, res) {
    Deck
        .find({"dateTime": "3_10_2016"})
        .exec(function(err, doc) {
            if (err) return (err);
            console.log(doc.length);
            res.send("gotem");
        });
});

var port = 3000;
app.listen(port, function() {
	console.log("listenin on port:" + port + " captain!");
})