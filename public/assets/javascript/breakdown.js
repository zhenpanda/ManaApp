var checkPower = function(deck) {
	console.log(deck.creator, ":deck creator.");
	//console.log(deck.deckList);

	//card compare list with stats
	var cardPowerList = {
		//white cards
		"Isolation Zone": 711,
		"Relief Captain": 633,
		"Immolating Glare": 573,
		"Allied Reinforcements": 549,
		"Steppe Glider": 531,
		"Expedition Raptor": 504,
		"Ondu War Cleric": 495,
		"Kor Sky Climber": 426,
		"Spawnbinder Mage": 390,
		"Kor Scythemaster": 387,
		"Shoulder to Shoulder": 375,
		"Make a Stand": 339,
		"Wall of Resurgence": 339,
		"Makindi Aeronaut":  267,
		"Searing Light":  246,
		"Affa Protector": 183,
		"Mighty Leap": 171,
		"Dazzling Reflection": 117,
		"Stoneforge Acolyte": 48,
		"Iona's Blessing": 48,
		//blue cards
		"Blinding Drone": 546
	};

	var power = 0;

	for (var c = 0; c < deck.deckList.length; c++) {
		//console.log(deck.deckList[c]);

		for (var prop in cardPowerList) {
		  //console.log("obj." + prop + " = " + cardPowerList[prop]);

		  //check if cards match up
		  if ( String(prop) == String(deck.deckList[c]) ) {
		  	power = power + parseInt(cardPowerList[prop]);
		  	//console.log(cardPowerList[prop]);
		  };
		}

	};
	//display power level
	console.log("----------");
	console.log("Deck Raw power level:", power);
	console.log("----------");
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
        checkPower(deckData[1]);

    });
};