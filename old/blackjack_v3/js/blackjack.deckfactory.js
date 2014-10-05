blackJack.deckFactory = {};
blackJack.deckFactory = function() {
    blackJack.deckFactory.amountOfDecks = prompt("How many decks would you like to play with (default 6:");
	blackJack.deckFactory.amountOfDecks.trim();
	blackJack.deckFactory.amountOfDecks = parseInt(blackJack.deckFactory.amountOfDecks);
	//blackJack.deckFactory.playDeck = [];
	blackJack.deckFactory.playDeck = blackJack.deckFactory.generator(blackJack.deckFactory.amountOfDecks); // Get shuffled decks
	blackJack.play.does(blackJack.deckFactory.playDeck);
}

//this application returns x amount of decks specified, shuffled already.
blackJack.deckFactory.generator = function(amountOfDecks) {
		console.log("in generator");
		var cardValue = [11,2,3,4,5,6,7,8,9,10,10,10,10];
		var cardName = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
		var cardSuit = ['♥ ', '♦ ', '♠', '♣'];
		var deck = [];

		if(amountOfDecks === undefined)
			amountOfDecks = 6;
		for(x = 0; x < amountOfDecks; x++) {
			for(var y = 0; y < cardSuit.length; y++) {
				for(var z = 0; z < cardValue.length; z++) {
					var card = {};		
					card.cardSuit = cardSuit[y];
					card.cardValue = cardValue[z];
					card.cardName = cardName[z]+ ' of '+cardSuit[y];
					deck.push(card);
				}
			}
		}
		console.log("leaving deckfactory");
		return _.shuffle(deck);
};

