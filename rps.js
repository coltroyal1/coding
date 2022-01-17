let cl= console.log;

let getRPS = function(){
let RPS = ["rock", "paper", "scissors"];
return RPS[Math.floor(Math.random()  * RPS.length)];
};
cl (getRPS());

let getUserInput = function() {
    let userInput = process.argv[2];
    return userInput || getRPS();
};

cl (getUserInput());

let getWinner =function(userInput, cumputerInput){
if (userInput === cumputerInput){
        return "tie";
    };

    if ((userInput === "rock" && computerInput === "Scissord") ||
        (userInput === "scissors" && computerInput === "rock") ||
        (userInput === "paper" && computerInput === "rock")) {
        return "user";
    }

    else {
        return "computer";
    }
};
let congratulate = function(Winner){
 if (Winner === "user"){
     cl("you win");
 } else if(Winner === "computer"){
cl("sorry you lose");
 }else{
     cl("it's a tie");
 }
};
let userInput = getUserInput();
let computerInput = getRPS();
cl("you chose " + userInput);
cl("computer chose " + computerInput);
let winner = getWinner(userInput, computerInput);
congratulate(winner);

