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

        //hit enter event
        $("#tags").bind("enterKey",function(e) {
           //do stuff here
           console.log(e)
        });
        $("#tags").keyup(function(e) {
            if(e.keyCode == 13) {
                //$(this).trigger("enterKey");
                console.log("you hit enter!");
                console.log($("#tags").val());

                //check if elemnt in html exists to load in func for the page
                if ($("#card-info").length > 0) {
                    console.log("this is the card's basic info");                

                    //calling createForm func
                    createForm($("#tags").val(), cardData); 
                }
                $("#tags").val('');
            }
        });
    };



    //get the card data from mtg json
    populate();
    //hide cards at the start of page    
    $("#card-info").hide();

});