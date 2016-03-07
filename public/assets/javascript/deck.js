/*
var createForm = function (inputCardName, cardData) {
	console.log("This is creating a form!");
	console.log("For card: " + inputCardName);
	for (var e = 0; e < cardData.length; e++) {
		if (cardData[e].name == inputCardName) {
			//console.log(cardData[e]);
				
			//show the card
			$("#card-info").show();

			if ( cardData[e].colors ) {
			    //Do this
				if (cardData[e].colors[0] == "White") {
					$( "#card-info" ).addClass( "wCard" );
				};
			}else{
				console.log("is colorless")
			};

		};
	};
};*/

var deckForm = function() {
	console.log("This is creating a deck!");

	// buttons on each magnet to remove cards and add mulitple copies
	/*
	Send deck data to mongodb:
		- array of cards put into the deck, spells and lands
		- deck creator name
		- deck type (seal/ team sealed/ draft)
		- record (win/lost/draw)
		
	*/
};