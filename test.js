let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
// 130
const c = a + b * b;
// 40
const d = a * b + b;  
// 60
const e = a * (b + b);
// 10
const f = a * b / a;
// 10
const g = b / a * a;
console.log(a, b, c, d, e, f, g)