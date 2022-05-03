///<reference path="lib/p5.global-mode.d.ts" />

// var setup = function () {
// createCanvas(600, 400);
// frameRate(5);
// };
//
// var draw = function () {
// background(100);
//
// for (let y = 0; y < 50; y++) {}
//
// for (let x = 0; x < 50; x++) {
// fill(random(200, 225));
// circle(x * 50, y * 50, 50);
// }
// };

// var setup = function () {
// createCanvas(600, 400);
// frameRate(5);
// };
//
// var draw = function () {
// background(100);
//
// for (let y = 0; y < 50; y++) {
// for (let x = 0; x < 50; x++) {
// fill(random(200, 255));
// square(x * 50, y * 50, 50);
// }
// }
// };
//

var setup = function () {
  createCanvas(600, 600);
  frameRate(5);
};
var draw = function () {
  background(100);

  // Draw a circle at location (30, 30) with a diameter of 20.
  circle(300, 300, 200);

  circle(250, 250, 20);

  circle(350, 250, 20);
};
