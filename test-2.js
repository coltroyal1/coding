///<reference path="lib/p5.global-mode.d.ts" />

let shapes = [];
var setup = function () {
  createCanvas(600, 400);
  for (let i = 0; i < 500; i++) {
    shapes.push(new Circle());
  }
};
var draw = function () {
  background(100);
  for (let index = 0; index < shapes.length; index++) {
    const shape = shapes[index];
    shape.draw();
  }
};
