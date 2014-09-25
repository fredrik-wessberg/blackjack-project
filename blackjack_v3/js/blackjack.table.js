blackJack.table = {};
blackJack.table.display = function() {
	
	console.log("Welcome to the blackJack table!")
	blackJack.table.amountOfDecks = prompt("How many decks would you like to play with: ");
	blackJack.table.amountOfDecks.trim();
	blackJack.table.amountOfDecks =parseInt(blackJack.table.amountOfDecks);
	blackJack.table.playerDeck = blackJack.deckFactory(blackJack.table.amountOfDecks); // Get shuffled decks

	
	blackJack.table.playerHand = [];
	blackJack.table.computerHand = [];


	//playerbam.push(blackJack.table.playerDeck.pop());
	blackJack.table.playerHand.push(blackJack.table.playerDeck.pop());
	console.log(blackJack.table.playerHand[0].cardName);

	blackJack.table.playerHand.sum = blackJack.table.playerHand[0].cardValue;

	blackJack.table.computerHand.push(blackJack.table.playerDeck.pop());
	console.log("The bank draws: " + blackJack.table.computerHand[0].cardName);

	blackJack.table.computerHand.sum = blackJack.table.computerHand[0].cardValue;


//	blackJack.table.playerHand = blackJack.table.playerDeck.pop();
//	console.log("You pulled card: ", blackJack.table.playerHand.cardName, " value ", blackJack.table.playerHand.cardValue);
//	blackJack.table.playerHand.push(blackJack.table.playerDeck.pop());
	//console.log("You pulled card: ", blackJack.table.playerHand.cardName, " value ", blackJack.table.playerHand.cardValue);


}