//html template
/*

<form class="form-horizontal">
  <div class="form-group">
    <label class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <p class="form-control-static">email@example.com</p>
    </div>
  </div>
</form>

*/

var createForm = function (inputCardName, cardData) {
	console.log("This is creating a form!");
	console.log("For card: " + inputCardName);
	for (var e = 0; e < cardData.length; e++) {
		if (cardData[e].name == inputCardName) {
			console.log(cardData[e]);
		};
	};
};