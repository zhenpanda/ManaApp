// delete deck func

// display Deck in DOM
var showDecks = function() {
	if($( "#db-decks" ).length) {
		console.log("rdy to show decks from db...");
	};
	var el = $('<div id="deck-button">Find decks in DB</div>');
	$("#db-decks").append(el);
	$( el ).on( "click", function() {
		//$( this ).remove();
		
		// load in decks
		var decks;
	    $.getJSON('/readDeck', function(data) {
	        decks = data;
	    }).done(function() {
	    	console.log(decks);
	    	// display deck 
	    	for (var d = 0; d < decks.length; d++) {
				var deck = $('<div class="player-decks">'+decks[d].creator+'</div>');
				$("#db-decks").append(deck);
				$(deck).on( "click", function() {
					$(this).remove();
					console.log($(this), "grab deck name.");
					// $.ajax({
					//   type: "POST",
					//   url: "/delete",
					//   data: decks[d].creator
					// }).done(function() {
					// 	console.log("deck deleted");
			  		// 	});
				})
	    	};
	    });
	});
};