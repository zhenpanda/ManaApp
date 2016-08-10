var createForm = function (inputCardName, cardData) {
	// console.log("This is creating a form!");
	// console.log("For card: " + inputCardName);
	
	var el = $('<div class="card">'+inputCardName+'</div>');
	$("#check-cards").append(el);

};