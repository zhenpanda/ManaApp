var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');

/*Mongoose Connect*/
var mongoose = require('mongoose');
var db = 'mongodb://localhost/cubeDB';
//var db = 'mongodb://localhost/testDB';

mongoose.connect(db);
// load models
var Card = require('./model/card').Card;
var Deck = require('./model/deck').Deck;
var Cube = require('./model/cube').Cube;

// don't scrape everytime check if cube exists
var cube;
// look for cube from db or web
Cube
    .find({"cubeName": 'jescube'})
    .exec(function(err, doc) {
        if (err) return (err);
        if (doc) {        	
            console.log("cube found!");
            //console.log(doc[0].cardList);
			cube = doc[0].cardList;
        }else{
		// scrape cubetutor
		var Xray = require('x-ray');
		var x = Xray();
		var url = "http://www.cubetutor.com/viewcube/25384";
		// x(url, '.cardPreview ')(function(err, c) {
		//   console.log(c)
		// });
		x(url, 'body', ['a.cardPreview'])(function(err, c) {
			// save cube into mongodb
		    var newCube = new Cube({
			    cubeName: 'jescube',
			    date: '8/10/16',
			    cardList: c
		    });
		    newCube.save(function(err) {
		        if (err) return (err)
		        console.log("cube saved...")
		    	cube = c;
	    	});
		});
        }
    });

// express dep
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// handlebar dep
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

// mtg json lib
var mtgjson = require('mtgjson');

//home test page
app.get('/', function(req, res) {
	res.render('index');
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
	// scrape data fetched
	/*	
	mtgjson(function(err, data) {
		if (err) return console.log(err);

		// Prints out all cards from the Limited Edition Alpha (LEA) set
		//console.log(data.OGW.cards);

		var ogw = data.OGW.cards;
		var bfz = data.BFZ.cards;
		var block = ogw.concat(bfz);

		//res.send(ogw[0].name);

		// var count = String(ogw.length);
		// res.send(count);
	});
	*/
	//res.send("harro world");
	res.json(cube);
});

// save the deck from req.body
app.post('/save', function(req, res) {
	//console.log(req.body);
	//console.log(req.body['deckList[]']);
    var newDeck = new Deck({
	    creator: req.body.creator,
	    dateTime: req.body.dateTime,
	    deckName: req.body.deckName,
	    notes: req.body.notes,
	    deckList: req.body['deckList[]'],
	    wins: req.body.wins,
	    loses: req.body.loses,
	    seat: req.body.seat,
	    version: req.body.version
    });
    newDeck.save(function(err) {
        if (err) return (err)
        console.log("deck saved...")
    });
});

//find by date route
app.get('/findDate', function(req, res) {
	var date = req.body.date;
    Deck
        .find({"dateTime": date})
        .exec(function(err, doc) {
            if (err) return (err);
            console.log(doc.length);
            res.send("gotem");
        });
});

//find deck all from db
app.get('/readDeck', function(req, res) {
	var date = req.body.date;
	var testDate = "8_10_2016";
	if (!date) { date = testDate };
    Deck
        .find({"dateTime": date})
        .exec(function(err, doc) {
            if (err) return (err);
            console.log(doc.length, "number of decks found!");
            res.json(doc);
        });
});


var port = 3000;
app.listen(port, function() {
	console.log("listenin on port:" + port + " captain!");
})
