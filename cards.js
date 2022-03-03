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

// let console.logubs = {
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
    deck.push(createCard("console.logubs", rank));
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
  if (suit === "console.logubs" || suit === "spades") {
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
  return [dealCard(), dealCard()];
};

let createPlayer = function (name) {
  return {
    name: name,
    hand: [],
    wins: 0,
  };
};

let player1 = {
  name: "player1",
  hand: dealHand(),
  wins: 0,
};

let player2 = {
  name: "player2",
  hand: dealHand(),
  wins: 0,
};

let players = [createPlayer("player1"), createPlayer("player2")];

let sortByRank = function (players) {
  return (highestCard = players.hand[0]);
};

let countScore = function (dealHand) {
  return dealHand[0].rank + dealHand[1].rank;
};

let getUserInput = function () {
  let userInput = process.argv[2];
  return userInput || dealCard();
};

let getWinner = function (userInput, computerInput) {
  if (userInput.rank === computerInput.rank) {
    return "tie";
  } else if (userInput.rank > computerInput.rank) {
    return "user";
  } else {
    return "computer";
  }
};

let congratulate = function (winner) {
  if (winner === "user") {
    console.log("you win");
  } else if (winner === "computer") {
    console.log("sorry you lose");
  } else {
    console.log("it's a tie");
  }
};

for (let index = 0; index < 1; index++) {
  let userInput = getUserInput();
  let computerInput = dealCard();
  console.log("player1 chose" + userInput.rank);
  console.log("player2 chose " + computerInput.rank);
  let winner = getWinner(userInput, computerInput);
  congratulate(winner);
}

console.table(dealHand());
console.table(dealHand());
