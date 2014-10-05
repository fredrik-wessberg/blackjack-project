var start = function(credits) {
	console.log("Welcome to table of BJ!");

	var playerHand = [];
	var playerScore = 0;

	// Creating deck
	var deck = [];
	var cardValue = [11,2,3,4,5,6,7,8,9,10,10,10,10];
	var cardSuit = ["Diamonds", "Hearts", "Clubs", "Spades"];
	var cardName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King" ]
	for(x = 0; x < cardSuit.length -1; x++) {
		for(y = 0; y < cardValue.length -1; y++) {
			var card = {};
			card.suit = cardSuit[x];
			card.value = cardValue[y];
			card.name = cardName[y] + ' of ' + cardSuit[x];
			deck.push(card);
		}
	}

	console.log("Drawing cards for player...");
	drawCard(playerHand, deck);
	drawCard(playerHand, deck);
	console.log(playerHand);
	// Add score
	addScore(playerHand, playerScore)
	console.log(playerScore);
};

var drawCard = function(hand, deck) {
	hand.push(deck.pop());
	
};

var addScore = function(hand, score) {
	hand.forEach(function (iCard) {
		score += iCard.value;
		console.log("You have received: " + iCard.name);
	});
	console.log(score);
	return score;
};


start(200);