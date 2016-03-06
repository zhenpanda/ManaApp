$(document).ready(function() {

    console.log('mbhelper');
    //put data in here
    var cardData;

    //ajax get news data function
    var populate = function() {
        // jQuery AJAX call for JSON
        $.getJSON('/fetch', function(data) {
            cardData = data;
            console.log("gotem new");

        }).done(function() {
            // running clickBox functions
            insert();
        });
    }

    var insert = function() {
        /*
        //testing tags
        var availableTags = [
            "ActionScript",
            "AppleScript"
        ];
        */
        var cardsAry = [];
        for (var c = 0; c < cardData.length; c++) {
            cardsAry.push(cardData[c].name);
        };
        $("#tags").autocomplete({
            source: cardsAry
        })  
    };

    //get the card data
    populate();

});