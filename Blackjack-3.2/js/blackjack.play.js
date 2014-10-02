'use strict';
blackjack.play = {};

blackjack.play.start = function() {
	var deck = blackjack.deck.createDeck();
	var playerHand = blackjack.deck.createHand(true);
	var dealerHand = blackjack.deck.createHand(false);
	
	//Pull 2 cards for the player
	playerHand.cards.push(blackjack.deck.drawCard(deck));
	playerHand.cards.push(blackjack.deck.drawCard(deck));
	playerHand.turn+=1;
	blackjack.ui.addValue(playerHand);
	//And 1 for the dealer
	dealerHand.cards.push(blackjack.deck.drawCard(deck));
	addValue(dealerHand.cards[dealerHand.cards.length-1].numericValue, dealerHand);
	

	blackjack.ui.display(playerHand,dealerHand);

	console.log("Players score: "+ playerHand.gameScore);
	/* playerHand.cards.push(blackjack.deck.drawCard(deck));
	console.log(playerHand.cards);
	console.log(playerHand);
	*/
};