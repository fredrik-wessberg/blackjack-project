'use strict';
blackJack.play.drawCard = function(whatHand) {
	if(blackJack.play.whatHand.isHuman) {
		blackJack.play.playerHand.push(blackJack.play.playerDeck.pop());
		blackJack.deckFactory.playerHand.sum += blackJack.deckFactory.playerHand[turn].cardValue;
		alert(blackJack.deckFactory.playerHand[0].cardName);
		console.log(blackJack.deckFactory.playerHand[0].cardName);
		return blackJack.deckFactory.playerHand;
	}

	else {
		blackJack.deckFactory.dealerHand.push(blackJack.deckFactory.playerDeck.pop());
		blackJack.deckFactory.dealerHand.sum += blackJack.deckFactory.dealerHand[turn].cardValue;
		alert("Computer card: " + blackJack.deckFactory.dealerHand[dealerHand].cardName);
		console.log(blackJack.deckFactory.dealerHand[turn].cardName);
		return blackJack.deckFactory.dealerHand	
	}
	
}