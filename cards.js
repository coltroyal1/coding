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
    case 2:
      return "2";
    case 3:
      return "3";
    case 4:
      return "4";
    case 5:
      return "5";
    case 6:
      return "6";
    case 7:
      return "7";
    case 8:
      return "8";
    case 9:
      return "9";
    case 10:
      return "10";
    case 11:
      return "jack";
    case 12:
      return "gueen";
    case 13:
      return "king";

    case 14:
      return "ace";
    default:
      return rank.toString();
  }
};
let dealCard = function () {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1)[0];
  return card;
};
let dealHand = function () {
  return [dealCard(), dealCard(), dealCard(), dealCard(), dealCard()];
};

let deck = buildDeck();
console.table(deck);

console.table(dealHand());
