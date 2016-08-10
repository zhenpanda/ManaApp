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
	var divName;

	if (inputLandName == "whiteMana") {
		colorId = "white-mana";
		basicLand = "Plains";
		divName = "#plains-area";
	}else if (inputLandName == "blueMana") {
		colorId = "blue-mana";
		basicLand = "Island";
		divName = "#island-area";
	}else if (inputLandName == "blackMana") {
		colorId = "black-mana";
		basicLand = "Swamp";
		divName = "#swamp-area";
	}else if (inputLandName == "redMana") {
		colorId = "red-mana";
		basicLand = "Mountain";
		divName = "#mountain-area";
	}else if (inputLandName == "greenMana") {
		colorId = "green-mana";
		basicLand = "Forest";
		divName = "#forest-area";
	};
	// attach div to target area
	var el = $('<div class="land-card" id="'+colorId+'">'+basicLand+'</div>');
	$(divName).append(el);
	// call landCount 
	landCount();

	//cards can be removed by clicking on to them
	$(el).on( "click", function() {
		$(this).remove();
		// remove card count from DOM
		setCardsCount("sub");
		landCount();
	});
};

// count different lands display in DOM
var	landCount = function() {
	var plainsCount = 0;
	var islandCount = 0;
	var swampCount = 0;
	var mountainCount = 0;
	var forestCount = 0;

    var landCountDivs = ["#plains-count", "#island-count", "#swamp-count", "#mountain-count", "#forest-count"];
    // set land counts by counting DOM elements
    var myLands = $( ".land-card");
    for (var l = 0; l < myLands.length; l++) {
    	//myCards.push(myLands[l].innerHTML);
    	var land = myLands[l].innerHTML
    	if (land == "Plains") {
    		plainsCount++;
    	}else if (land == "Island") {
    		islandCount++;
    	}else if (land == "Swamp") {
    		swampCount++;
    	}else if (land == "Mountain") {
    		mountainCount++;
    	}else if (land == "Forest") {
    		forestCount++;
    	};
    };

    for (var c = 0; c < landCountDivs.length; c++) {
    	if (c == 0) {		
	    	if (plainsCount > 0) {
			    $(landCountDivs[c]).text(plainsCount);    		
	    	}else{
	    		$(landCountDivs[c]).empty(); 
	    	}
    	}else if (c == 1) {
	    	if (islandCount > 0) {
			    $(landCountDivs[c]).text(islandCount);    		
	    	}else{
	    		$(landCountDivs[c]).empty(); 
	    	}
    	}else if (c == 2) {
	    	if (swampCount > 0) {
			    $(landCountDivs[c]).text(swampCount);    		
	    	}else{
	    		$(landCountDivs[c]).empty(); 
	    	}
    	}else if (c == 3) {
	    	if (mountainCount > 0) {
			    $(landCountDivs[c]).text(mountainCount);    		
	    	}else{
	    		$(landCountDivs[c]).empty(); 
	    	}
    	}else if (c == 4) {
	    	if (forestCount > 0) {
			    $(landCountDivs[c]).text(forestCount);    		
	    	}else{
	    		$(landCountDivs[c]).empty(); 
	    	}
    	};
    };
}


