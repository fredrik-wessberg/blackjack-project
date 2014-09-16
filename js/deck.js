//deckOfCards()
var value;
var family;



// this sets the value of the cards.
var value = Array('A', '2', '3', '4', '5', '6', '7', '8', '9',
	'10', 'J', 'Q', 'K');

//this is the cards "famlily" Clubs, Diamonds, Spade, Hearts.
var family = Array('C', 'D', 'H', 'S');

//this becomes one deck of card 52 pcs.
var deck = value.length * family.length;

var x = 6; // the var x is the number of decks the game should have