///<reference path="lib/p5.global-mode.d.ts" />

var setup = function () {
  createCanvas(600, 400);
};
//
// let x = 0;
// var draw = function () {
// background(100);
// fill("red");
// circle(x++, 100, 100);
// };

// let shap = {
//   x: 0,
//   y: 0,
// };

// var draw = function () {
//   background(100);
//   fill("red");
//   circle(this.x += random(-4, 4)

//   , 100);
// };

// let this = {
//   x: 300,
//   y: 200,
//   vx: -7,
//   vy: 6,

//   draw: function () {
//     fill(this.red);
//     circle((this.x += this.vx), (this.y += this.vy), 100);
//     if (this.x < 0 || this.x > 600) {
//       this.vx = -this.vx;
//     }
//     if (this.y < 0 || this.y > 400) {
//       this.vy = -this.vy;
//     }
//   },
// };

// var draw = function () {
//   background(100);
//   this.draw();
// };

let shape = {
  x: 300,
  y: 200,
  vx: -7,
  vy: -6,

  draw: function () {
    fill(random(225));
    circle((this.x += this.vx), (this.y += this.vy), 100);
    if (this.x < 0 || this.x > 600) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > 400) {
      this.vy = -this.vy;
    }
  },
};

var draw = function () {
  background(100);
  shape.draw();
};
