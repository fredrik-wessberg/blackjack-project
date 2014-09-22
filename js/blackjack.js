// Greet user to the new table and ask for amount of decs to use in the game
//console.log("Welcome to this explicitly nice version of blackjack the card game");
<<<<<<< HEAD
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
=======



//var playerName = prompt("What is your name:");

//var amountOfDecks = prompt("Hi " + playerName + " how many decs would you like to play with:");

// creating a "base" deck which is used to genereate the amount of decks user asked later.


var baseDeck = [[]];

// Hearts
baseDeck.push("Two of Hearts", 2);
baseDeck.push("Three of Hearts", 3);
baseDeck.push("Four of Hearts", 4);
baseDeck.push("Five of Hearts", 5);
baseDeck.push("Six of Hearts", 6);
baseDeck.push("Seven of Hearts", 7);
baseDeck.push("Eight of Hearts", 8);
baseDeck.push("Nine of Hearts", 9);
baseDeck.push("Ten of Hearts", 10);
baseDeck.push("Jack of Hearts", 10);
baseDeck.push("Queen of Hearts", 10);
baseDeck.push("King of Hearts", 10);
baseDeck.push("Ace of Hearts", 11);

// Clubs
baseDeck.push("Two of Clubs", 2);
baseDeck.push("Three of Clubs", 3);
baseDeck.push("Four of Clubs", 4);
baseDeck.push("Five of Clubs", 5);
baseDeck.push("Six of Clubs", 6);
baseDeck.push("Seven of Clubs", 7);
baseDeck.push("Eight of Clubs", 8);
baseDeck.push("Nine of Clubs", 9);
baseDeck.push("Ten of Clubs", 10);
baseDeck.push("Jack of Clubs", 10);
baseDeck.push("Queen of Clubs", 10);
baseDeck.push("King of Clubs", 10);
baseDeck.push("Ace of Clubs", 11);

// Diamonds
baseDeck.push("Two of Diamonds", 2);
baseDeck.push("Three of Diamonds", 3);
baseDeck.push("Four of Diamonds", 4);
baseDeck.push("Five of Diamonds", 5);
baseDeck.push("Six of Diamonds", 6);
baseDeck.push("Seven of Diamonds", 7);
baseDeck.push("Eight of Diamonds", 8);
baseDeck.push("Nine of Diamonds", 9);
baseDeck.push("Ten of Diamonds", 10);
baseDeck.push("Jack of Diamonds", 10);
baseDeck.push("Queen of Diamonds", 10);
baseDeck.push("King of Diamonds", 10);
baseDeck.push("Ace of Diamonds", 11);

// Spades
baseDeck.push("Two of Spades", 2);
baseDeck.push("Three of Spades", 3);
baseDeck.push("Four of Spades", 4);
baseDeck.push("Five of Spades", 5);
baseDeck.push("Six of Spades", 6);
baseDeck.push("Seven of Spades", 7);
baseDeck.push("Eight of Spades", 8);
baseDeck.push("Nine of Spades", 9);
baseDeck.push("Ten of Spades", 10);
baseDeck.push("Jack of Spades", 10);
baseDeck.push("Queen of Spades", 10);
baseDeck.push("King of Spades", 10);
baseDeck.push("Ace of Spades", 11);

// Shuffle deck
/*var playDeck[[]] = shuffleDeck(baseDeck);



// Copy deck into activeDeck
// Missing function - copy these decks numberOfDecks-times 
//var activeDeck = [
//	[]
//];
//activeDeck = baseDeck;

function shuffleDeck(mixMyDeck) {
	return _.shuffle(mixMyDeck[[]]);
}*/ 
>>>>>>> master
