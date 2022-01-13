let D = new Date();
D. setMinutes(10);
console.log(D);

// Math.random()
console.log(Math.round(Math.random()* 1000))

let Dice = ["d4", "d6", "d8", "d10", "d12", "d20"];
const randomNumber = Math.floor(Math.random()* Dice.length);
Dice[randomNumber];
console.log(randomNumber, Dice[randomNumber]);
