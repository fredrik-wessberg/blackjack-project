var blackjack= {};

blackjack.firstTime = function() {
	blackjack.credits = 2000;
	blackjack.bet = prompt("How much to bet each run: ");
	blackjack.bet = parseInt(blackjack.bet,10);;
	blackjack.turn = 0;

	blackjack.start();
};

blackjack.start = function() {
	if(blackjack.choice==='quit') {
		return 0;
	}
	blackjack.playerHand = [];
	blackjack.dealerHand = [];
	blackjack.playerScore = 0;
	blackjack.dealerScore = 0;
	blackjack.turn+=1;

	
	
	if(blackjack.turn % 5 === 0 && blackjack.turn!=1) {
		if(confirm("Continue or Quit")) {
		blackjack.createDeck();
		blackjack.player();
	}
	else 
		blackjack.choice = 'quit';
		return 0;
	}
	blackjack.createDeck();
	blackjack.player();
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


blackjack.drawCard = function(isHuman, times) {
	if(isHuman) {
		for(var x = 0;x < times;x++) {
			blackjack.playerHand.push(blackjack.deck.pop());
			console.log("You are dealt: " + blackjack.playerHand[blackjack.playerHand.length-1].name);
		}
	}
	else {
		blackjack.dealerHand.push(blackjack.deck.pop());
		console.log("The house gets: " + blackjack.dealerHand[blackjack.dealerHand.length-1].name);
	}
};

blackjack.player = function() {
	if(blackjack.playerHand.length < 2) {
		blackjack.drawCard(1,2);
	}
	
	blackjack.addScore(1,2);
	console.log("Your score: "+blackjack.playerScore);

	if(blackjack.playerScore>=21) {
		blackjack.win();
	}
	else {
		while(confirm("Hit or stand?")) {
			blackjack.drawCard(1,1);
			blackjack.addScore(1,1);
			console.log("Your score: "+blackjack.playerScore)
			if(blackjack.playerScore > 21)
				blackjack.loose();
			if(blackjack.playerScore == 21)
				blackjack.win();
		}
	blackjack.dealer();
	}
};


blackjack.addScore = function(isHuman,times) {
	if(isHuman===1) {
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
	blackjack.credits+=blackjack.bet;
	console.log("You win!");
	console.log("You have: "+ blackjack.credits);
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
		console.log("House score is:"+blackjack.dealerScore);
	}
	if(blackjack.dealerScore == 21) {
		console.log("House gets Blackjack!");
		blackjack.loose();
	}
	else if(blackjack.dealerScore > 21) 
		blackjack.win();
	else if(blackjack.dealerScore > blackjack.playerScore)
		blackjack.loose();
	else if(blackjack.dealerScore === blackjack.playerScore) {
		console.log("Draw!")
		blackjack.win();
	}
	else
		blackjack.win();
};