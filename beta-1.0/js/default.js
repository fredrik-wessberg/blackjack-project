var blackjack = {};

blackjack.main = function() {
	blackjack.credits = 100;
	blackjack.createDeck();
	$('.deal').click(function() {
		blackjack.deal()
		blackjack.score();
	});
	$('.hit').click(function() {
		if(blackjack.playerScore >0) {
			blackjack.drawCard(1);
			blackjack.score();
		}
		else
			alert("Deal cards first!");
	});
			
	blackjack.bet = $('.bet').val();
	$('.score').val(blackjack.playerScore);
};

blackjack.createDeck = function() {
	blackjack.deck = [];
	blackjack.suit = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
	blackjack.values = [11,2,3,4,5,6,7,8,9,10,10,10,10];
	blackjack.names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	for(var x = 0; x < blackjack.suit.length; x++) {
		for(var y = 0; y < blackjack.values.length; y++) {
			blackjack.card = {};
			blackjack.card.suit = blackjack.suit[x];
			blackjack.card.numericValue = blackjack.values[y];
			blackjack.card.name = blackjack.names[y] + ' of ' + blackjack.suit[x];
			blackjack.deck.push(blackjack.card);
		}
	}
	blackjack.deck = _.shuffle(blackjack.deck);
};

blackjack.deal = function() {
	console.log("dealing cards");
	blackjack.playerHand = [];
	blackjack.dealerHand = [];


	blackjack.drawCard(1);
	blackjack.drawCard(1);

	blackjack.drawCard();
};

blackjack.drawCard = function(isHuman) {
	if(isHuman)
		blackjack.playerHand.push(blackjack.deck.pop());
	else
		blackjack.dealerHand.push(blackjack.deck.pop());
};

blackjack.score = function() {
	blackjack.playerScore = 0;
	blackjack.dealerScore = 0;
	blackjack.playerAce = 0;
	blackjack.dealerAce = 0;
	
	// Player scoring
	blackjack.playerHand.forEach(function (card) {
		if(card.numericValue == 11)
			blackjack.playerAce++;
		blackjack.playerScore += card.numericValue;
		if(blackjack.playerScore > 21 && blackjack.playerAce > 0) {
			blackjack.playerScore -= 10;
			blackjack.playerAce--;
		}
	});

	// Dealer scoring
	blackjack.dealerHand.forEach(function (card) {
		blackjack.dealerScore += card.numericValue;
		if(card.numericValue == 11)
			blackjack.dealerAce++;
		if(blackjack.dealerScore > 21 && blackjack.dealerAce > 0) {
			blackjack.dealerScore -= 10;
			blackjack.dealerAce--;
		}
	});

	if(blackjack.playerScore == 21)
		blackjack.win();
	else if(blackjack.playerScore > 21)
		blackjack.loose();
	else if(blackjack.playerScore > blackjack.dealerScore)
		blackjack.win();
	else
		blackjack.loose();


	blackjack.showScores();
};

blackjack.showScores = function() {
	$('.score').text('Player Score: '+blackjack.playerScore);
	blackjack.cardsName = [];
	blackjack.playerHand.forEach(function (card) {
		console.log('You are dealt:' + card.name);
		blackjack.cardsName += card.name;
	});
	$('.cards').text('Player cards: ' +blackjack.cardsName);
};

blackjack.win = function() {
	blackjack.credits += blackjack.bet;
};

blackjack.loose = function() {
	blackjack.credits-=blackjack.bet;
	console.log("you loose!");
};

$(document).ready(blackjack.main);