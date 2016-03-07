//html template
/*
<form class="form-horizontal">
  <div class="form-group">
  	<!-- card name -->
    <label class="col-sm-2 control-label">Name</label>
    <div class="col-sm-10"><p class="form-control-static">someCardName</p></div>
    <!-- card mana cost -->
    <label class="col-sm-2 control-label">ManaCost</label>
    <div class="col-sm-10"><p class="form-control-static">{6}{C}</p></div>
    <!-- card text -->
    <label class="col-sm-2 control-label">Text</label>
    <div class="col-sm-10"><p class="form-control-static">({C} represents colorless mana.)↵At the beginning of combat on your turn, reveal the top card of your library. If a creature card is revealed this way, you may have creatures you control other than Deceiver of Form become copies of that card until end of turn. You may put that card on the bottom of your library.</p></div>
  </div>
</form>
*/

var createForm = function (inputCardName, cardData) {
	console.log("This is creating a form!");
	console.log("For card: " + inputCardName);
	for (var e = 0; e < cardData.length; e++) {
		if (cardData[e].name == inputCardName) {
			//console.log(cardData[e]);
				
			//show the card
			$("#card-info").show();

			if ( cardData[e].colors ) {
			    //Do this
				if (cardData[e].colors[0] == "White") {
					$( "#card-info" ).addClass( "wCard" );
				};
			}else{
				console.log("is colorless")
			};

		};
	};
};