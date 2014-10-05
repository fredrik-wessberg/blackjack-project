'use strict';
blackJack.play = function(playDeck) {
	
	blackJack.play.playerHand = [];
	blackJack.play.dealerHand = [];
    
    blackJack.play.playerHand.isHuman = true;
    blackJack.play.dealerHand.isHuman = false;
    blackJack.play.playerHand.sumOfCards = 0;
	blackJack.play.dealerHand.sumOfCards = 0;

	blackJack.play.drawCard(playerHand)
}; 

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

		// Some play logic: I know it looks awefully long but I was unsure if best-practice would be to create yet a file/ function for
	
	
