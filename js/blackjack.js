// Greet user to the new table and ask for amount of decs to use in the game
//console.log("Welcome to this explicitly nice version of blackjack the card game");
var playerName = prompt("What is your name:");

var amountOfDecks = prompt("Hi " + playerName + " how many decs would you like to play with:");

// creating a "base" deck which is used to genereate the amount of decks user asked later.
var baseDeck = [];

// Hearts
baseDeck.push("Two of Hearts");
baseDeck.push("Three of Hearts");
baseDeck.push("Four of Hearts");
baseDeck.push("Five of Hearts");
baseDeck.push("Six of Hearts");
baseDeck.push("Seven of Hearts");
baseDeck.push("Eight of Hearts");
baseDeck.push("Nine of Hearts");
baseDeck.push("Ten of Hearts");
baseDeck.push("Jack of Hearts");
baseDeck.push("Queen of Hearts");
baseDeck.push("King of Hearts");
baseDeck.push("Ace of Hearts");

// Clubs
baseDeck.push("Two of Clubs");
baseDeck.push("Three of Clubs");
baseDeck.push("Four of Clubs");
baseDeck.push("Five of Clubs");
baseDeck.push("Six of Clubs");
baseDeck.push("Seven of Clubs");
baseDeck.push("Eight of Clubs");
baseDeck.push("Nine of Clubs");
baseDeck.push("Ten of Clubs");
baseDeck.push("Jack of Clubs");
baseDeck.push("Queen of Clubs");
baseDeck.push("King of Clubs");
baseDeck.push("Ace of Clubs");

// Diamonds
baseDeck.push("Two of Diamonds");
baseDeck.push("Three of Diamonds");
baseDeck.push("Four of Diamonds");
baseDeck.push("Five of Diamonds");
baseDeck.push("Six of Diamonds");
baseDeck.push("Seven of Diamonds");
baseDeck.push("Eight of Diamonds");
baseDeck.push("Nine of Diamonds");
baseDeck.push("Ten of Diamonds");
baseDeck.push("Jack of Diamonds");
baseDeck.push("Queen of Diamonds");
baseDeck.push("King of Diamonds");
baseDeck.push("Ace of Diamonds");

// Spades
baseDeck.push("Two of Spades");
baseDeck.push("Three of Spades");
baseDeck.push("Four of Spades");
baseDeck.push("Five of Spades");
baseDeck.push("Six of Spades");
baseDeck.push("Seven of Spades");
baseDeck.push("Eight of Spades");
baseDeck.push("Nine of Spades");
baseDeck.push("Ten of Spades");
baseDeck.push("Jack of Spades");
baseDeck.push("Queen of Spades");
baseDeck.push("King of Spades");
baseDeck.push("Ace of Spades");

// Copy deck into activeDeck
var activeDeck = [
	[]
];
activeDeck = baseDeck;