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

//click event func when Archive Deck button is hit
var saveDeck = function() {
    $( "#sendDeck" ).on( "click", function() {

        var myDeck = $( ".card" );
        var myCards = [];
        for (var c = 0; c < myDeck.length; c++) {
            myCards.push(myDeck[c].innerHTML);
        };
        //console.log(myCards, "deck list array.");

        //grab seat num 
        // code here...

        //grab input info creator
        var newCreator = $( "#deck-creator").val();
        $( "#deck-creator").val('');

        //grab deck name
        var newDeckName = $( "#deck-name").val();
        $( "#deck-name").val('');

        //grab inputn notes
        var newDeckNotes = $( "#inputDeckNotes").val();
        $( "#inputDeckNotes").val('');
        
        //create date 
        var creationDate = makeDate();
        console.log("rdy to made deck obj...")
        //send data
        var dataPack = {
		    creator: newCreator,
		    dateTime: creationDate,
		    deckName: newDeckName,
		    notes: newDeckNotes,
		    deckList: myCards,
		    wins: 1,
		    loses: 2,
		    seat: 1,
		    version: 1
        };
        console.log(dataPack);

        //post data to node to save to db
		$.ajax({
		  type: "POST",
		  url: "/save",
		  data: dataPack
		});

    });
};