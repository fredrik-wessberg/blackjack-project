var blackjack = {};

blackjack.main = function () {
	blackjack.playerCredit = 100;
	blackjack.createDeck(4);
	blackjack.game();

};

blackjack.game = function (reset) {
	//Reseting values
	blackjack.playerHand = [];
	blackjack.playerScore = 0;
	blackjack.dealerScore = 0;
	blackjack.dealerHand = [];

	$('.win').hide();
	$('.loose').hide();
	$('.status').hide();
	$('.stand').hide();
	$('.cText').hide();
	$('.cards').hide();
	$('.hit').hide();
	$('.score').hide();
	$('.deal').show();
	$('.bet').show();
	$('.credits').text('Player Credit: ' + blackjack.playerCredit);
	$('.deal').click(function () {
		blackjack.playerBet = $('.bet input').val();
		$('.win').hide();
		$('.loose').hide();
		$('.deal').hide();
		$('.bet').hide();
		$('.hit').show();
		$('.stand').show();
		blackjack.dealCards();
		$('.cText').show();
		$('.cards').show();
	});
	$('.hit').click(function () {
		blackjack.drawCard(1);
	});
	$('.stand').click(function () {
		blackjack.housePlay();
	});
};

blackjack.createDeck = function (numberOfDecks) {
	blackjack.deck = [];
	blackjack.suit = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
	blackjack.values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	blackjack.names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	for (var z = 0; z < numberOfDecks; z++) {
		for (var x = 0; x < blackjack.suit.length; x++) {
			for (var y = 0; y < blackjack.values.length; y++) {
				blackjack.card = {};
				blackjack.card.suit = blackjack.suit[x];
				blackjack.card.numericValue = blackjack.values[y];
				blackjack.card.name = blackjack.names[y] + ' of ' + blackjack.suit[x];
				blackjack.deck.push(blackjack.card);
			}
		}
	}
	blackjack.deck = _.shuffle(blackjack.deck);
};

blackjack.dealCards = function () {
	blackjack.playerHand = [];
	blackjack.dealerHand = [];
	blackjack.playerAces = 0;
	blackjack.dealerAces = 0;

	blackjack.drawCard(1);
	blackjack.drawCard(1);

	blackjack.drawCard(0);
};

blackjack.drawCard = function (isHuman) {
	if (isHuman) {
		blackjack.playerHand.push(blackjack.deck.pop());
	} else
		blackjack.dealerHand.push(blackjack.deck.pop());
	blackjack.showScores();
};

blackjack.showScores = function () {
	$('.score').show();
	$('.dScore').show();

	blackjack.playerScore = 0;
	blackjack.dealerScore = 0;

	blackjack.dealerAces = 0;
	blackjack.playerAces = 0;

	//Player score
	blackjack.playerCards = '';
	blackjack.dealerCards = '';

	blackjack.playerHand.forEach(function (card) {
		if (card.numericValue === 11)
			blackjack.playerAces++;
		blackjack.playerScore += card.numericValue;

		if (blackjack.playerScore > 21 && blackjack.playerAces > 0) {
			blackjack.playerScore -= 10;
			blackjack.playerAces--;
		}
	});

	//Player cards
	blackjack.playerHand.forEach(function (card) {
		blackjack.playerCards += card.name + ' ';
	});
	$('.cards').text(blackjack.playerCards);
	$('.score').text('Score: ' + blackjack.playerScore);
	$('.credits').text('Player Credit: ' + blackjack.playerCredit);

	if (blackjack.playerScore == 21)
		blackjack.win();
	if (blackjack.playerScore > 21)
		blackjack.loose();
	if (blackjack.dealerScore > 21)
		blackjack.win();

	//Dealer score
	blackjack.dealerHand.forEach(function (card) {
		if (card.numericValue === 11)
			blackjack.dealerAces++;
		blackjack.dealerScore += card.numericValue;
		if (blackjack.dealerScore > 21 && blackjack.dealerAces > 0) {
			blackjack.dealerScore -= 10;
			blackjack.dealerAces--;
		}
	});
	//Dealer cards
	blackjack.dealerHand.forEach(function (card) {
		blackjack.dealerCards += card.name + ' ';
	});

	$('.dCards').text(blackjack.dealerCards);
	$('.dScore').text('Dealer score: ' + blackjack.dealerScore);
};


blackjack.win = function () {
	blackjack.playerCredit = parseInt(blackjack.playerCredit, 10);
	blackjack.playerBet = parseInt(blackjack.playerBet, 10);
	blackjack.playerCredit += blackjack.playerBet;

	$('.hit').hide();
	$('.stand').hide();
	$('.win').show();
	$('.deal').show();
};

blackjack.loose = function () {
	blackjack.playerCredit = parseInt(blackjack.playerCredit);
	blackjack.playerBet = parseInt(blackjack.playerBet);
	blackjack.playerCredit -= blackjack.playerBet;
	//$('.status').show();
	if (blackjack.playerCredit <= 0) {
		alert("Game over!");
	}
	$('.hit').hide();
	$('.stand').hide();
	$('.loose').show();
	$('.deal').show();
};


blackjack.housePlay = function () {
	while (blackjack.dealerScore < 17) {
		blackjack.drawCard(0);
		blackjack.showScores();
	}
	if (blackjack.dealerScore > blackjack.playerScore && blackjack.dealerScore <= 21)
		blackjack.loose();
	else
		blackjack.win();

};


$(document).ready(blackjack.main);