var checkPower = function(deck) {
	//console.log(deck);
	//console.log(deck.deckList);

	var power = 0;
	var cardsCount = 0;

	for (var c = 0; c < deck.deckList.length; c++) {
		//console.log(deck.deckList[c]);

		for (var prop in cardPowerList) {
		  //console.log("obj." + prop + " = " + cardPowerList[prop]);

		  //check if cards match up
		  if ( String(prop) == String(deck.deckList[c]) ) {
		  	power = power + parseInt(cardPowerList[prop]);
		  	//console.log(cardPowerList[prop]);
		  	cardsCount++;
		  };
		};

	};

	//normalize power level
	if (deck.deckList.length > cardsCount) {
		var dif = deck.deckList.length - cardsCount;
		power = power + (dif * 35);
	};

	//display power level
	console.log("----------");
	console.log(deck.creator+ ": " +deck.deckName)
	console.log( "Deck Raw power level score:", power );
	//console.log( sortedCards );
};

//calc the raw power level of a deck from mongodb
var read = function function_name () {
    // jQuery AJAX call for mtg cards JSON
    $.getJSON('/readDeck', function(data) {
        deckData = data;
        //console.log(cardData, "gotem new card data");
    }).done(function() {
        //console.log(deckData)

        //check the power of decks
        for (var d = 0; d < deckData.length; d++) {
        	//checkPower(deckData[1]);
        	checkPower(deckData[d]);
        };

    });
};