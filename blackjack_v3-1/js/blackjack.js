var BjTable = function() {
	var credits = 2000;

	alert("Hi and welcome to the blackjack table!")
	
	var amountOfDecks = prompt("How many decks would you like to play with (default 6)");
	amountOfDecks = parseInt(amountOfDecks);
	console.log(amountOfDecks);
	if(amountOfDecks === NaN) {
		amountOfDecks = 6;
	}

	var deck = deckFactory(amountOfDecks);

	BjPlay(deck, credits);

};


var deckFactory = function(amountOfDecks) {
	var deck= [];
	
	var cardValue = [11,2,3,4,5,6,7,8,9,10,10,10,10];
	var cardType = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
	var cardSuit = ['♥ ', '♦ ', '♠', '♣'];
	for(var x = 0; x < amountOfDecks; x++) {
		for(var y = 0; y < cardSuit.length; y++) {
			for(var z = 0; z < cardType.length; z++) {
				var card = {};
				card.suit = cardSuit[y];
				card.value = cardValue[z];
				card.type = cardType[z];
				card.name = cardType[z] + ' of ' + cardSuit[y];
				deck.push(card);
			}
		}
	}
	return _.shuffle(deck);

};

var drawCard = function(deck) {
	return deck.pop();
};

var BjPlay = function(deck, credits) {
	var playerHand = [];
	var dealersHand = [];
	
	var playerSum = 0;
	var dealersSum = 0;
	var choice ="";

	var bet = prompt('Place your bets: (you have ' + credits + '$)');
	
	// Draw 2 cards
	playerHand.push(drawCard(deck));
	playerHand.push(drawCard(deck));
	playerSum = playerHand[0].value + playerHand[1].value;

	// Bank draws 1 card
	dealersHand.push(drawCard(deck));
	dealersSum = dealersHand[0].value;

	// Display turn
	playerHand.forEach(function (card) {
		console.log('You recieve: '+ card.name);	
	});
	
	console.log("Your score is: " + playerSum);
	console.log("Dealers hand: " + dealersHand[0].name);	
	
	// Make do-while loop
	choice = 'h';
	do {
		choice = choice.toLowerCase(prompt("H)it or S)tand?"))
		playerHand.push(drawCard(deck));
		playerSum+=playerHand[playerHand.length-1].value;
	} while(playerSum <= 21 && choice=='h');
/*
	while(playerSum <= 21 || choice == 'h') {
		choice = choice.toLowerCase(prompt("(H)it or (S)tand"));
		if(choice == 'h' || choice == 'hit') {
			playerHand.push(drawCard(deck));
			playerSum+=playerHand[playerHand.length-1].value;
		}
		else
			break;
	}
*/
		

	if(playerSum<=21) {
		console.log("Your score is:" + playerSum)
		while(dealersSum<=17) {
			console.log("Dealer draws card: ",dealersHand.push(drawCard(deck)));
			dealersSum+=dealersHand[dealersHand.length -1].value;

		}
	} else {
		console.log("You got fat!"); //Tjock
		credits -= bet;
		BjTable();
	}

	if(playerSum > dealersHand) {
		console.log("You win!");
		credits += bet;
		BjTable();
	}
	else if(playerSum < dealersHand) {
		console.log("You loose!");
		credits-=bet;
		BjTable();
	}

	//console.log("Bank hand:\t\t\t" + dealersHand[0].name);

};



