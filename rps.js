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

if(
 (userInput === "rock" && cumputerInput === "Scissord") ||
 (userInput === "scissors" && cumputerInput === "rock") ||
 (userInput === "paper" && cumputerInput === "rock")) {
 return "win";
}

else {
    return "lose";
}}
let congratulate = function(result){
 if (result === "tie"){
     cl("nobody's a winner");
 } else if(result === "win"){
cl("you are such  a winner!");
 }else{
     cl("sorry you lose")
 }
}