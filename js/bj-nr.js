// Greet user to the new table and ask for amount of decs to use in the game
//console.log("Welcome to this explicitly nice version of blackjack the card game");
var baseDeck = [];

// Hearts
baseDeck.push("2 of Hearts");
baseDeck.push("3 of Hearts");
baseDeck.push("4 of Hearts");
baseDeck.push("5 of Hearts");
baseDeck.push("6 of Hearts");
baseDeck.push("7 of Hearts");
baseDeck.push("8 of Hearts");
baseDeck.push("9 of Hearts");
baseDeck.push("10 of Hearts");
baseDeck.push("11 of Hearts");
baseDeck.push("12 of Hearts");
baseDeck.push("13 of Hearts");
baseDeck.push("14 of Hearts");

// Clubs
baseDeck.push("2 of Clubs");
baseDeck.push("3 of Clubs");
baseDeck.push("4 of Clubs");
baseDeck.push("5 of Clubs");
baseDeck.push("6 of Clubs");
baseDeck.push("7 of Clubs");
baseDeck.push("8 of Clubs");
baseDeck.push("9 of Clubs");
baseDeck.push("10 of Clubs");
baseDeck.push("11 of Clubs");
baseDeck.push("12 of Clubs");
baseDeck.push("13 of Clubs");
baseDeck.push("14 of Clubs");

// Diamonds
baseDeck.push("2 of Diamonds");
baseDeck.push("3 of Diamonds");
baseDeck.push("4 of Diamonds");
baseDeck.push("5 of Diamonds");
baseDeck.push("6 of Diamonds");
baseDeck.push("7 of Diamonds");
baseDeck.push("8 of Diamonds");
baseDeck.push("9 of Diamonds");
baseDeck.push("10 of Diamonds");
baseDeck.push("11 of Diamonds");
baseDeck.push("12 of Diamonds");
baseDeck.push("13 of Diamonds");
baseDeck.push("14 of Diamonds");

// Spades
baseDeck.push("2 of Spades");
baseDeck.push("3 of Spades");
baseDeck.push("4 of Spades");
baseDeck.push("5 of Spades");
baseDeck.push("6 of Spades");
baseDeck.push("7 of Spades");
baseDeck.push("8 of Spades");
baseDeck.push("9 of Spades");
baseDeck.push("10 of Spades");
baseDeck.push("11 of Spades");
baseDeck.push("12 of Spades");
baseDeck.push("13 of Spades");
baseDeck.push("14 of Spades");

var playerName = prompt("What is your name:");

var amountOfDecks = prompt("Hi " + playerName + " how many decs would you like to play with:");

// Copy deck into activeDeck
var activeDeck = [
	[]
];
activeDeck = baseDeck * amountOfDecks;
console.log(activeDeck);

// creating a "base" deck which is used to genereate the amount of decks user asked later.