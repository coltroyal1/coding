// let hearts = {
//   Rank: 12,
//   suit: "Hearts",
//   color: "red",
//   name: "gueen",
// };

// let diamonds = {
//   Rank: 14,
//   suit: "diamonds",
//   color: "red",
//   name: "king",
// };

// let spades = {
//   Rank: 11,
//   suit: "spades",
//   color: "black",
//   name: "jack",
// };

// let clubs = {
//   Rank: 11,
//   suit: "spades",
//   color: "black",
//   name: "jack",
// };

// let deck = [];
// for (let i = 2; i < 15; i++) {
//   deck.push({
//     rank: i,
//     suit: "hearts",
//   });
//   deck.push({
//     rank: i,
//     suit: "diamonds",
//   });
// }

// console.table(deck);

let buildDeck = function () {
  let deck = [];
  for (let rank = 2; rank < 15; rank++) {
    deck.push(createCard("hearts", rank));
    deck.push(createCard("diamonds", rank));
    deck.push(createCard("spades", rank));
    deck.push(createCard("clubs", rank));
  }
  return deck;
};

let createCard = function (suit, rank) {
  let name = getRankName(rank);
  let color = getSuitColor(suit);
  let card = {
    rank: rank,
    suit: suit,
    name: name,
    color: color,
  };
  return card;
};
let getSuitColor = function (suit) {
  if (suit === "clubs" || suit === "spades") {
    return "black";
  } else {
    return "red";
  }
};

let getRankName = function (rank) {
  switch (rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
      return "Ace";
    default:
      return rank.toString();
  }
};





let deck = buildDeck();

let dealCard = function () {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1)[0];
  return card;
};

let dealHand = function () {
  return [dealCard(), dealCard(), ];
};
 
let createPlayer = function(name){
  return {
    name: name,
    hand: [],
    wins: 0
  }
};

sortByRank(player1.hand);
let highestCard = player1.hand[0];

lat Players = [
  newPlayer(player1),
  newPlayer(player2)
];

 let sortByRank(player1.hand)

let countScore = function(hand) {
  return hand[0].rank + hand[1].rank;
}

console.table(deck);

console.table(dealHand());
console.table(dealHand());






