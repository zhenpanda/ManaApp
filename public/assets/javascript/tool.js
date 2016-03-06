$(document).ready(function() {

    console.log('mbhelper');
    //put data in here
    var cardData;

    //ajax get news data function
    var populate = function() {
        // jQuery AJAX call for mtg cards JSON
        $.getJSON('/fetch', function(data) {
            cardData = data;
            console.log("gotem new card data");

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
        //load in cards
        $("#tags").autocomplete({
            source: cardsAry
        });

        //hit enter event
        $("#tags").bind("enterKey",function(e) {
           //do stuff here
           console.log(e)
        });
        $("#tags").keyup(function(e) {
            if(e.keyCode == 13) {
                //$(this).trigger("enterKey");
                console.log("you hit enter!");
                //var boxText = ;
                console.log( $("#tags").val() );

                $("#tags").val('');
            }
        });

    };

    //get the card data
    populate();

});