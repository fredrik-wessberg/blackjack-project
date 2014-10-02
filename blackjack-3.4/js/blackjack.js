var blackjack = {};
blackjack.main = function() {
	blackjack.credits = 2000;
	blackjack.score = 0;
	blackjack.firstTimer = 1;

	blackjack.playerHand = [];
	blackjack.dealerHand = [];

	blackjack.playerScore = 0;
	blackjack.dealerScore = 0;

	blackjack.turn = 0;

	console.log("Welcome to the Blackjack table!");
	console.log("Default bet is 20$, you start with 2000$.");
	console.log("Good luck!");
	
	blackjack.createDeck();

	while(blackjack.credits > 0) {
		if(blackjack.firstTimer == 1) {
		console.log("First run!\nDrawing card for player...");
		blackjack.drawCard(blackjack.playerHand);
		blackjack.drawCard(blackjack.playerHand);
		}
		console.log("Your cards are:" + blackjack.playerHand[0].name + ' and ' + blackjack.playerHand[1].name);
		
		blackjack.playerScore = blackjack.scores(blackjack.playerHand)
		console.log("You Score:" + blackjack.playerScore);

		blackjack.drawCard(blackjack.dealerHand);
		
		console.log("Dealer has: " + blackjack.dealerHand[0].name);
		
		blackjack.dealerScore = blackjack.scores(blackjack.dealerHand);

		console.log("Dealer score:"+ blackjack.dealerScore);

		while(blackjack.playerScore < 21 &&(confirm("Stand or Hit?") && blackjack.turn <5  )) {
			blackjack.turn+=1;
			blackjack.drawCard(blackjack.playerHand);
			blackjack.playerScore = blackjack.scores(blackjack.playerHand);
			if(blackjack.playerSCore >= 21) {
				alert("Blackjack!");
				playerWin(blackjack.credits,blackjack.bet);
			}
			console.log("You get: "+ blackjack.playerHand[blackjack.playerHand.length -1].name);

			console.log("Your score: "+ blackjack.playerScore);
		}

		while(blackjack.dealerScore < 17) {
			blackjack.drawCard(blackjack.dealerHand);
			blackjack.dealerScore = blackjack.scores(blackjack.dealerScore);
		}
		//blackjack.scores.display()
		return 0;
	}
}


blackjack.drawCard = function(hand) {
	hand.push(blackjack.deck.pop()); 
}

blackjack.createDeck = function() {
	blackjack.playerHand = [];
	blackjack.deck = [];
	blackjack.cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	blackjack.cardSuit = ["Clubs", "Spades", "Diamonds", "Hearts"];
	blackjack.cardName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
	for(var x = 0; x < blackjack.cardSuit.length; x++) {
		for(var y = 0; y < blackjack.cardValue.length; y++) {
			blackjack.card = {};
			blackjack.card.suit = blackjack.cardSuit[x];
			blackjack.card.value = blackjack.cardValue[y];
			blackjack.card.name = blackjack.cardName[y] +' of '+  blackjack.cardSuit[x];
			blackjack.deck.push(blackjack.card);
		}
	}
	blackjack.deck = _.shuffle(blackjack.deck);
	return blackjack.deck;
}

blackjack.scores = function(hand) {
	var targetScore = 0;
	hand.forEach(function(point) {
		targetScore += point.value;
	});
	return targetScore;

};