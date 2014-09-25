//this application returns a deck
blackJack.deckFactory = function(amountOfDecks) {
		var cardValue = [11,2,3,4,5,6,7,8,9,10,10,10,10];
		var cardName = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
		var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
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
		return _.shuffle(deck);
};