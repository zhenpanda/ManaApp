// count cards in DOM set that num in DOM
var setCardsCount = function(mode) {
    // add cards in deck based on DOM info
    var deckOfCardsCount = $("#card-count-num").text();
    var cardsCount = parseInt(deckOfCardsCount);
    if (mode == "add") {
    	cardsCount++;
    }else if(mode == "sub") {
    	cardsCount--;
    };
    $("#card-count-num").text(cardsCount);
}

// create land station in DOM
var createLandStation = function() {
	var landNames = ["whiteMana","blueMana","blackMana","redMana","greenMana"];
	for (var n = 0; n < landNames.length; n++) {
		var img = $('<img id='+landNames[n]+' class="land-button">');
		img.attr('src', '../assets/images/'+landNames[n]+'.png');
		img.appendTo('#land-station');
		//add click event to mana
	    $(img).bind("click",function(e) {
	       // console.log($(this).attr('id'));
	       // add the land
	       landForm($(this).attr('id'));
	       setCardsCount("add");
	    });
	};
}

//get cards from mongodb in DOM to create card forms
var insert = function(cardsData) {
    //var availableTags = ["ActionScript"];
    // setup during load

    //load in cards
    $("#tags").autocomplete({
        source: cardsData
    });
    //add click event different for each page
    $("#tags").bind("enterKey",function(e) {
       //do stuff here
       console.log(e)
    });

    $("#tags").keyup(function(e) {
        if(e.keyCode == 13) {
            //$(this).trigger("enterKey");
            //console.log("you hit enter!");
            //console.log($("#tags").val());
            
            //find all cards on page
	        var cardsOnPage = $( ".card" );
	        var listOfCards = [];
	        for (var c = 0; c < cardsOnPage.length; c++) {
	            listOfCards.push(cardsOnPage[c].innerHTML);
	        };

            //check if card entered is unique
            var found = $.inArray($("#tags").val(), listOfCards) > -1;
            //console.log("checked result", found);

            //check if element doesn't exist
            if (!found) {                
                if ($("#deck-info").length > 0) {
                    //call deckForm func with input of entered card
                    deckForm($("#tags").val());  
                    setCardsCount("add");              
                };
            };

            // reset text input to blank
            $("#tags").val('');
        }
    });
};

// create div in DOM of card from search
var deckForm = function(inputCardName) {
	//console.log("This is creating a deck!");
	//console.log("added card: " + inputCardName);

	// buttons on each magnet to remove cards and add mulitple copies
	// dom checker showing how many cards been added total (use dom to keep count)
	var el = $('<div class="card">'+inputCardName+'</div>');
	$("#deck-info").append(el);
	//cards can be removed by clicking on to them
	$( el ).on( "click", function() {
		$( this ).remove();
		// remove card count from DOM
		setCardsCount("sub");
	});

	var myCards = $( ".card" );
	//console.log(myCards.length);
};

// create div in DOM of card from mana symbol buttons
var landForm = function(inputLandName) {
	var colorId;
	var basicLand;
	if (inputLandName == "whiteMana") {
		colorId = "white-mana";
		basicLand = "Plains";
	}else if (inputLandName == "blueMana") {
		colorId = "blue-mana";
		basicLand = "Island";
	}else if (inputLandName == "blackMana") {
		colorId = "black-mana";
		basicLand = "Swamp";
	}else if (inputLandName == "redMana") {
		colorId = "red-mana";
		basicLand = "Mountain";
	}else if (inputLandName == "greenMana") {
		colorId = "green-mana";
		basicLand = "Forest";
	};
	var el = $('<div class="land-card" id="'+colorId+'">'+basicLand+'</div>');
	$("#land-area").append(el);
	//cards can be removed by clicking on to them
	$( el ).on( "click", function() {
		$( this ).remove();
		// remove card count from DOM
		setCardsCount("sub");
	});
}