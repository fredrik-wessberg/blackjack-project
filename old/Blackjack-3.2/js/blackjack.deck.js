'use strict';
blackjack.deck = {};

blackjack.deck.createDeck = function() {
	var cardValue = [11,2,3,4,5,6,7,8,9,10,10,10,10];
	var cardSuit = ['♠', '♥', '♦', '♣'];
	var cardName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

	var deck = [];

	for(var x = 0; x < cardSuit.length; x++) {
		for(var y = 0; y < cardValue.length; y++) {
			var card = {};
			card.numericValue = cardValue[y];
			card.suit = cardSuit[x];
			card.cName = cardName[y] +" of "+ cardSuit[x];
			deck.push(card);
		}
	}
	return _.shuffle(deck);
};

blackjack.deck.drawCard = function(deck) {
	return deck.pop();
};

blackjack.deck.createHand = function(isHuman) {
	var that = {};
	that.cards = [];
	that.gameScore = 0;
	that.turn = 0;
	if(isHuman==true)
		that.maxValue=21;
	else
		that.maxValue=17;
	return that;
}