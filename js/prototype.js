var table = function () {
	var credits = 2000;
	var deckAmount = 0;
	var playDeck = [];

	console.log("Hi and welcome to the Blackjack table!\n");
	console.log("Commands are:\n");
	console.log("<B> for changing bet value!");
	console.log("<S> for splitting hands");
	console.log("<P> for statistics (win/lost hands)");
	console.log("<SPACE> for \"hold\"");
	console.log("<ENTER> for pulling another card");
	console.log("\n\n\nHow many decks would you like to play with?");

	deckAmount = prompt("Insert number of decks:");

	playDeck = getDeck(deckAmount);

	console.log("Shuffling cards...");
	playDeck = shuffleDeck(playDeck);

	console.log(playDeck);
	console.log("Drawing cards for player....");

	var playerCard = pullCard(playDeck);
	var bankCard = pullCard(playDeck);

	console.log("You got a " + playerCard.name);
	console.log("Drawing card for the bank...");
	console.log(bankCard.type);

};


// Function takes one argument and return an array-object containing x amount of decks
var getDeck = function (deckAmount) {
	var cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	var cardType = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10", "10", "10"];
	var cardSuit = ["Diamonds", "Hearts", "Spades", "Clubs"];
	var deck = [];
	for (var b = 0; b < deckAmount; b++) { //  Instead of creating x amount of individual arrays we extend the active one with this
		for (var i = 0, iLength = cardSuit.length; i < iLength; i++) {
			for (var x = 0, xLength = cardValue.length; x < xLength; x++) {
				var card = {};
				card.suite = cardSuit[i];
				card.value = cardValue[x];
				card.type = cardType[x];
				card.name = cardType[x] + " of " + cardSuit[i];
				deck.push(card);
			}
		}
	}
	return deck;
};

var shuffleDeck = function (shuffledDeck) {
	return _.shuffle(shuffledDeck);
};

// If you look at the deck lying on a table, the last card placed on the deck would be the one
// on top, and therefore pop is more realistic than shift :)
var pullCard = function (playDeck) {
	return playDeck.pop();
};