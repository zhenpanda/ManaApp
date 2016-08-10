$(document).ready(function() {

    //ajax get card data from server
    //run insert once data is gotten
    var cardData;
    var populate = function() {
        // jQuery AJAX call for mtg cards JSON
        $.getJSON('/fetch', function(data) {
            cardData = data;
            //console.log(cardData, "gotem new card data");
        }).done(function() {
            // scrcaped cards into auto complete ary
            // run clickBox functions
            insert(cardData);
            // setup DOM
            createLandStation();
            //load decks in from db
            showDecks();
        });
    }

    //get the card data from mtg json
    populate();
    
    //save deck on click
    saveDeck();

    //setup
    var myDate = makeDate();
    console.log(myDate, 'mbhelper loaded...');

});