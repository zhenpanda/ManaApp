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

/*
<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
*/

var deckForm = function(inputCardName) {
	//console.log("This is creating a deck!");
	//console.log("added card: " + inputCardName);

	// buttons on each magnet to remove cards and add mulitple copies
	// dom checker showing how many cards been added total (use dom to keep count)

	/*
	Send deck data to mongodb:
		- array of cards put into the deck, spells and lands
		- deck creator name
		- comment
		- record (win/lost/draw)
	*/

	var el = $('<div class="card">'+inputCardName+'</div>');
	$("#deck-info").append(el);
	//cards can be removed by clicking on to them
	$( el ).on( "click", function() {
		$( this ).remove();
	});

	var myCards = $( ".card" );
	//console.log(myCards.length);


};

