var createDeck = function() {
	var cardValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
	var cardSuit = ['♠', '♥', '♦', '♣'];
	var cardName = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	var deckAmount = 6;
	var deck = [];

	for(var x = 0; x < deckAmount; x++) {
		for(var y = 0; y < cardSuit.length; y++) {
			for(var z = 0; z < cardValue.length; z++) {
				var card = {};
				card.suit = cardSuit[y];
				card.value = cardValue[z];
				card.name = cardName[z] + ' of ' + cardSuit[y];
				deck.push(card);
			}
		}
	}
	return _.shuffle(deck);		// Shuffling and returning
};


var bjPlay = function(credits, bet) {
	var deck = createDeck();
	
	var playerHand = [];
	var playerScore = 0;
	
	var dealerHand = [];
	var dealerScore = 0;

	// First give
	playerHand.push(drawCard(deck));
	playerHand.push(drawCard(deck));
	console.log(playerHand);
	dealerHand.push(drawCard(deck));
	console.log("You receive cards: " + playerHand[0].name + ' and ' + playerHand[1].name);
	console.log("Dealer draws: " + dealerHand[0].name);
/*
	playerScore+=playerHand.card[0].value;
	playerScore+=playerHand.card[1].value;
	dealerScore+=dealerHand.card[0].value;
*/
	while(playerScore <= 21 && confirm("Hit or stand?")) {
		playerHand.push(drawCard(deck));
		playerScore+=playerHand[playerHand.length-1].value;
		printValues(playerHand);
	}
	if(playerScore == 21) {
		alert("You win!");
		credits += bet;
		bjPlay(credits,bet);
	}
	else if(playerScore > 21) {
		console.log("Sorry, you loose!");
		credits -=bet;
		bjPlay(credits,bet);
	}
	else {
		while(dealerScore <= 17) {
			dealerHand.push(drawCard(deck));
			printValues(dealerHand);
		}
		if(dealerScore > 21) {
			console.log("You win!");
			credits+=bet;
			bjPlay(credits,bet);
		}
		else if(dealerScore < playerScore) {
			console.log("You win!");
			credits+=bet;
			bjPlay(credits,bet);
		}
		else {
			console.log("You loose!");
			credits-=bet;
			bjPlay(credits,bet);
		}
	}
};


var drawCard = function(deck) {
	return deck.pop();
};

var printValues = function(Hand) {
	console.log("Drawing card: " + Hand[Hand.length-1].name);
};

var firstTime = function() {
	console.log("Hi and welcome to the blackjack table!");
	var credits = 100;
	var bet = 20;
	console.log("You start of with 100$, default bet per game is 20.");
	bjPlay(credits,bet);
}