// Greet user to the new table and ask for amount of decs to use in the game
console.log("Welcome to this explicitly nice version of blackjack the card game");
var playerName prompt("What is your name:")

console.log("How many decs would you like to use (4-8)"):
var amountOfDecks = prompt("Use values between 4-8");

// creating a "base" deck which is used to genereate the amount of decks user asked later.
var baseDeck[51];

// Hearts
baseDeck[0] = "Two of Hearts";
baseDeck[1] = "Three of Hearts";
baseDeck[2] = "Four of Hearts";
baseDeck[3] = "Five of Hearts";
baseDeck[4] = "Six of Hearts";
baseDeck[5] = "Seven of Hearts";
baseDeck[6] = "Eight of Hearts";
baseDeck[7] = "Nine of Hearts";
baseDeck[8] = "Ten of Hearts";
baseDeck[9] = "Jack of Hearts";
baseDeck[10] = "Queen of Hearts";
baseDeck[11] = "King of Hearts";
baseDeck[12] = "Ace of Hearts";

// Clubs
baseDeck[13] = "Two of Clubs";
baseDeck[14] = "Three of Clubs";
baseDeck[15] = "Four of Clubs";
baseDeck[16] = "Five of Clubs";
baseDeck[17] = "Six of Clubs";
baseDeck[18] = "Seven of Clubs";
baseDeck[19] = "Eight of Clubs";
baseDeck[20] = "Nine of Clubs";
baseDeck[21] = "Ten of Clubs";
baseDeck[22] = "Jack of Clubs";
baseDeck[23] = "Queen of Clubs";
baseDeck[24] = "King of Clubs";
baseDeck[25] = "Ace of Clubs";

// Diamonds
baseDeck[27] = "Two of Diamonds";
baseDeck[28] = "Three of Diamonds";
baseDeck[29] = "Four of Diamonds";
baseDeck[30] = "Five of Diamonds";
baseDeck[31] = "Six of Diamonds";
baseDeck[32] = "Seven of Diamonds";
baseDeck[33] = "Eight of Diamonds";
baseDeck[34] = "Nine of Diamonds";
baseDeck[35] = "Ten of Diamonds";
baseDeck[36] = "Jack of Diamonds";
baseDeck[37] = "Queen of Diamonds";
baseDeck[38] = "King of Diamonds";
baseDeck[39] = "Ace of Diamonds";

// Spades
baseDeck[40] = "Two of Spades";
baseDeck[41] = "Three of Spades";
baseDeck[42] = "Four of Spades";
baseDeck[43] = "Five of Spades";
baseDeck[44] = "Six of Spades";
baseDeck[45] = "Seven of Spades";
baseDeck[46] = "Eight of Spades";
baseDeck[47] = "Nine of Spades";
baseDeck[48] = "Ten of Spades";
baseDeck[49] = "Jack of Spades";
baseDeck[50] = "Queen of Spades";
baseDeck[51] = "King of Spades";
baseDeck[52] = "Ace of Spades";