$(document).ready(function() {

    var listOfCards = [];

    //get cards from mongodb in DOM to create card forms
    var insert = function() {
        //var availableTags = ["ActionScript"];
        // scrcaped cards into auto complete ary
        var cardsAry = cardData;

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

                //check if element doesn't exist
                if ($("#card-info").length > 0) {
                    //console.log("this is the card's basic info");                
                    //call createForm func with input
                    createForm($("#tags").val(), cardData);
                //check if element in html exists to load in func
                }; 
                if ($("#deck-info").length > 0) {
                    //console.log("this is the deck archive page");
                    //call deckForm func with input of entered card
                    deckForm($("#tags").val());                 
                };
                $("#tags").val('');

                // add cards in deck based on DOM info
                var deckOfCardsCount = $("#card-count-num").text();
                var cardsCount = parseInt(deckOfCardsCount);
                cardsCount++;
                $("#card-count-num").text(cardsCount);
            }
        });
    };

    //ajax get card data from server
    //run insert once data is gotten
    var cardData;
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

    //get the card data from mtg json
    populate();
    
    //save deck on click
    saveDeck();

    //test stuff
    var myDate = makeDate();
    console.log("Todays date:", myDate);

    /*  
    //get deck form db
    read();
    */

    console.log('mbhelper loaded...');

});