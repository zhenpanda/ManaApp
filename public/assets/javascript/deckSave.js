//click event func when Archive Deck button is hit
var saveDeck = function() {
    $( "#sendDeck" ).on( "click", function() {
    	// find cards from cube added to the list
        var myDeck = $( ".card" );
        var myCards = [];
        for (var c = 0; c < myDeck.length; c++) {
            myCards.push(myDeck[c].innerHTML);
        };
        // find lands added to the list
        var myLands = $( ".land-card");
        for (var l = 0; l < myLands.length; l++) {
        	myCards.push(myLands[l].innerHTML);
        };
        
        //console.log(myCards, "deck list array.");

        //grab seat num 
        var newSeatNum = $( "#seatNumber").val();
        //grab input info creator
        var newCreator = $( "#deck-creator").val();
        //grab deck name
        var newDeckName = $( "#deck-name").val();
        //grab inputn notes
        var newDeckNotes = $( "#inputDeckNotes").val();
        //grab wins/losses
        var newWins = $( "#wins").val();
        var newLosses = $( "#losses").val();

        //create date 
        var creationDate = makeDate();
        //console.log("rdy to made deck obj...")

        //send data
        var dataPack = {
		    creator: newCreator,
		    dateTime: creationDate,
		    deckName: newDeckName,
		    notes: newDeckNotes,
		    deckList: myCards,
		    wins: newWins,
		    loses: newLosses,
		    seat: newSeatNum,
		    version: 1
        };
        //console.log(dataPack);

        //post data to node to save to db
		$.ajax({
		  type: "POST",
		  url: "/save",
		  data: dataPack
		}).done(function() {
			console.log("deck saved into db...");
			//clear everything
			$( "#card-count-num").text(0);
			$( "#deck-info").empty();
			$( "#plains-area").empty();
			$( "#island-area").empty();
			$( "#swamp-area").empty();
			$( "#mountain-area").empty();
			$( "#forest-area").empty();
			landCount();

	        $( "#seatNumber").val('');
	        $( "#deck-creator").val('');
	        $( "#deck-name").val('');
	        $( "#inputDeckNotes").val('');
	        $( "#wins").val('');
	        $( "#losses").val('');
        });;
        
    });
};