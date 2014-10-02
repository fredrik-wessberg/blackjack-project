'use strict';
blackJack.gameTable = {};
// Shows greeting message and does the graphical presentation for the user
	blackJack.gameTable.display = function() {
	alert("Welcome to the blackJack table!");
	alert("You begin with 2000 credits in dollars.");
	alert("Input commands:\n<B>Change bet\n<Empty input> draw card\n<SPACE> to settle with the hand");

	//console.log("Welcome to the blackJack table!");
	//console.log("You begin with 2000 credits in dollars.");
	//console.log("Input commands:\n\t\t\t\t\t\t<B>Change bet\n\t\t\t\t\t\t<Empty input> draw card\n\t\t\t\t\t\t<SPACE> to settle with the hand");
	blackJack.deckFactory();

};
//	blackJack.table.playerHand = blackJack.table.playerDeck.pop();
//	console.log("You pulled card: ", blackJack.table.playerHand.cardName, " value ", blackJack.table.playerHand.cardValue);
//	blackJack.table.playerHand.push(blackJack.table.playerDeck.pop());
//	console.log("You pulled card: ", blackJack.table.playerHand.cardName, " value ", blackJack.table.playerHand.cardValue);

