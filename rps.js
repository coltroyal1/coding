let cl = console.log;

let getRPS = function () {
  let RPS = ["rock", "paper", "scissors"];
  return RPS[Math.floor(Math.random() * RPS.length)];
};
cl(getRPS());

let getUserInput = function () {
  let userInput = process.argv[2];
  return userInput || getRPS();
};

cl(getUserInput());

let getWinner = function (userInput, computerInput) {
  if (userInput === computerInput) {
    return "tie";
  } else if (
    (userInput === "rock" && computerInput === "scissors") ||
    (userInput === "paper" && computerInput === "rock") ||
    (userInput === "scissor" && computerInput === "paper")
  ) {
    return "user";
  } else {
    return "computer";
  }
};
let congratulate = function (winner) {
  if (winner === "user") {
    cl("you win");
  } else if (winner === "computer") {
    cl("sorry you lose");
  } else {
    cl("it's a tie");
  }
};

for (let index = 0; index < 100000; index++) {
  let userInput = getUserInput();
  let computerInput = getRPS();
  cl("You chose " + userInput);
  cl("Computer chose " + computerInput);
  let winner = getWinner(userInput, computerInput);
  congratulate(winner);
}
