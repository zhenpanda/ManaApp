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