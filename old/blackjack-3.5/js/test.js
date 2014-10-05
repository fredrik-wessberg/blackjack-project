var blackjack= {};

blackjack.firstTime = function() {
	blackjack.credits = 2000;
	blackjack.bet = prompt("How much to bet each run: ");
	
	blackjack.playerHand = [];
	blackjack.dealerHand = [];
	blackjack.start();
};

blackjack.start = function() {
	blackjack.playerScore = 0;
	blackjack.choice = '';
	blackjack.choice = prompt("C)ontinue or Q)uit")
	blackjack.choice = blackjack.choice.toLowerCase();
	if(blackjack.choice == 'c') {
		blackjack.createDeck();
		blackjack.player();
	}
	else 
		return 0;
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
};


blackjack.drawCard = function(isHuman, times) {
	if(isHuman) {
		for(var x = 0;x < times;x++) {
			blackjack.playerHand.push(blackjack.deck.pop());
			console.log("You are dealt: " + blackjack.playerHand[blackjack.playerHand.length-1].name);
		}
	}
	else {
		blackjack.dealer.push(blackjack.deck.pop());
		console.log("The bank gets: " + blackjack.dealerHand[blackjack.dealerHand.length-1].name);
	}
};

blackjack.player = function() {
	if(blackjack.playerHand.length < 2) {
		blackjack.drawCard(1,2);
	}
	
	blackjack.addScore(1,2);
	console.log("your score: "+blackjack.playerScore);

	if(blackjack.playerScore>=21) {
		blackjack.win();
	}
	else {
		while(confirm("Hit or stand?")) {
			blackjack.drawCard(1,1);
			blackjack.addScore(1,1);
			if(blackjack.playerScore > 21)
				blackjack.loose();
			if(blackjack.playerScore == 21)
				blackjack.win();
		}
		blackjack.dealer();
	}
};


blackjack.addScore = function(isHuman,times) {
	if(isHuman) {
		if(times == 2) {
				for(x = 0; x < times;x++) 
					blackjack.playerScore += blackjack.playerHand[x].numericValue;
		} else
			blackjack.playerScore += blackjack.playerHand[blackjack.playerHand.length-1].numericValue;
	}
	else {
		blackjack.dealerScore += blackjack.dealerHand[blackjack.dealerHand.length-1].numericValue;
	}
};


blackjack.win = function() {
	console.log("You win!");
	blackjack.credits+=blackjack.bet;
	blackjack.start();
};

blackjack.loose = function() {
	console.log("You loose!");
	blackjack.credits-=blackjack.bet;
	blackjack.start();
};

blackjack.dealer = function() {
	while(blackjack.dealerScore < 17) {
		blackjack.drawCard(0);
		blackjack.addScore(0);
	}
	if(blackjack.dealerScore == 21)
		blackjack.loose();
	else if(blackjack.dealerScore > 21) 
		blackjack.win();
	else if(blackjack.dealerScore > blackjack.playerScore)
		blackjack.loose();
	else
		blackjack.win();
};