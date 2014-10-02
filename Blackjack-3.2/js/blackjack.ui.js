'use strict';
blackjack.ui = {};
blackjack.ui.start = function() {

};


blackjack.ui.display = function(playerHand, dealerHand) {
	if(playerHand.turn == 1) {
	for(var x = 0; x < playerHand.cards.length; x++) {
		console.log("Players hand: " + playerHand.cards[x].cName);
		blackjack.ui.addValue(playerHand.cards[x].numericValue, playerHand)
	}
	playerHand.turn++;
	} else {
		console.log("Players hand: " + playerHand.cards[playerHand.cards.length-1]);
		blackjack.ui.addValue(playerHand.cards[playerHand.cards.length-1].numericValue, playerHand);
	}
};

blackjack.ui.addValue = function(value, hand) {
	hand.gameScore +=value;
}