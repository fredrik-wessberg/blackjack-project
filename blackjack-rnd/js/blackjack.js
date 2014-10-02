// Simplified blackjack version just for the logics practice

var blackjack ={};

blackjack.table = function() {
	

	var cardSuit = ["Hearts", "Diamonds", "Clubs", "Spades"];
	var cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	var cardName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

	var deck= [];
	for(var x = 0; x < cardSuit.length;x++) {
		for(var y = 0; y < cardValue.length;y++) {
			var card = {};
			card.suit = cardSuit[x];
			card.numericValue = cardValue[y];
			card.cName = cardName[y] + ' of ' + cardSuit[x];
			deck.push(card);
		}
	}
	deck = _.shuffle(deck);
	console.log(deck);
	blackjack.deal(deck);
};

blackjack.deal = function(deck) {
	var playerHand = [];
	var dealerHand = [];

	var playerValue = 0;
	var dealerValue = 0;

	console.log("Drawing cards...");
	
	// Do while? 
	//Det här under är väldigt grötigt - Ja tänker att ja bygger en funktion som drar kort för x hand, adderar värdet och presenterar resultatet.

	for(var i = 0; i < 2; i++) {
		blackjack.drawCard(deck, playerHand)
	}
	
	playerHand.forEach(function(oneCard) {
		console.log("You recieve a "+ oneCard.cName);
		playerValue+=oneCard.numericValue;
	});

	if(playerValue==21) {
		alert("Blackjack! You win!")
		console.log("Blackjack! You win!")
		blackjack.table();
	}

	console.log("Your score: " +playerValue);

	blackjack.drawCard(deck, dealerHand);
	console.log("Dealer draws card: " +dealerHand[0].cName);
	console.log("Bank score:" + dealerHand[0].numericValue);

	while(confirm("Your score is" + playerValue + " want another card?") === true)
		blackjack.drawCard(deck, playerHand);

};

blackjack.drawCard = function(deck, targetHand) {
	targetHand.push(deck.pop());
	return targetHand;

}