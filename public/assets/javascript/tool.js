$(document).ready(function() {

    console.log('mbhelper');
    //put data in here
    var cardData;
    //ajax get news data function
    var populate = function() {
        // jQuery AJAX call for mtg cards JSON
        $.getJSON('/fetch', function(data) {
            cardData = data;
            //console.log(cardData, "gotem new card data");
        }).done(function() {
            // running clickBox functions
            insert();
        });
    }

    //get cards from mongodb store it in DOM
    var insert = function() {
        //testing tags
        //var availableTags = ["ActionScript"];
        var cardsAry = [];
        for (var c = 0; c < cardData.length; c++) {
            cardsAry.push(cardData[c].name);
        };

        //load in cards
        $("#tags").autocomplete({
            source: cardsAry
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

                //check if element in html exists to load in func
                if ($("#card-info").length > 0) {
                    //console.log("this is the card's basic info");                
                    //call createForm func with input
                    createForm($("#tags").val(), cardData);

                //check if element in html exists to load in func
                } else if ($("#deck-info").length > 0) {
                    //console.log("this is the deck archive page");

                    //call deckForm func with input of entered card
                    deckForm($("#tags").val());                 
                    
                };
                $("#tags").val('');
            }
        });
    };

    //get the card data from mtg json
    populate();
    //hide cards at the start of page    
    $("#card-info").hide();

    //build on click
    saveDeck();
    //test stuff
    var myDate = makeDate();
    console.log("Todays date:", myDate);
});