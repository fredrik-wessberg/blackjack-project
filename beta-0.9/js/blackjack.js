var blackjack= {};

blackjack.firstTime = function() {
	blackjack.credits = 2000;
	blackjack.bet = prompt("How much to bet each run: (you start with 2000) ");
	blackjack.bet = parseInt(blackjack.bet,10);;
	blackjack.turn = 0;
	if(blackjack.bet > blackjack.credits || blackjack.bet < 0) {
		console.log("Not a valid bet, exiting...");
		return 0;
	}
	else {
		blackjack.start();
	}
};

blackjack.start = function() {
	while(blackjack.credits <= 0 || blackjack.choice!='quit') {
		if(blackjack.choice==='quit') {
			return 0;
		}
		
		blackjack.dealerHand = [];
		blackjack.dealerAces = 0;
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
	}
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
			if(blackjack.playerHand[blackjack.playerHand.length-1].numericValue===11) {
				console.log("Player got ace-value conducted to variable!");
				blackjack.playerAces++;
			}
		}
	}
	else {
		blackjack.dealerHand.push(blackjack.deck.pop());
		console.log("House draws: "+blackjack.dealerHand[blackjack.dealerHand.length-1].name)
		if(blackjack.dealerHand[blackjack.dealerHand.length-1].numericValue===11) {
			console.log("The house gets: " + blackjack.dealerHand[blackjack.dealerHand.length-1].name);
			blackjack.dealerAces+=1;
		}
	}
};

blackjack.player = function() {
	alert("Dealing new hand!");
	blackjack.playerAces = 0;
	blackjack.playerHand = [];
	blackjack.playerScore = 0;
		
	blackjack.drawCard(1,2);
	blackjack.addScore(1,2);

	console.log("Your score: "+blackjack.playerScore);

	if(blackjack.playerScore>=21) {
		blackjack.win();
	}
	else {
		while(confirm("Hit or stand?") && blackjack.playerScore < 21) {
			blackjack.drawCard(1,1);
			blackjack.addScore(1,1);
			
			if(blackjack.playerScore > 21) {
				if(blackjack.playerAces===1) {
					blackjack.playerScore-=10;
					blackjack.playerAces--;
				}
				else {
					blackjack.loose();
				}
			}
			console.log("Your score: "+blackjack.playerScore)
			if(blackjack.playerScore == 21)
				blackjack.win();
		}
		if(blackjack.playerScore < 21)
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
};

blackjack.loose = function() {
	console.log("You loose!");
	blackjack.credits-=blackjack.bet;
};

blackjack.dealer = function() {
	while(blackjack.dealerScore < 17) {
		blackjack.drawCard(0);
		blackjack.addScore(0);
		console.log("House score is: "+blackjack.dealerScore);
	}
	if(blackjack.dealerScore == 21) {
		console.log("House gets Blackjack!");
		blackjack.loose();
	}
	else if(blackjack.dealerScore > 21) 
		if(blackjack.dealerAces > 0) {
			blackjack.dealerScore-=10;
			blackjack.dealerAces--;
		}
		else
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