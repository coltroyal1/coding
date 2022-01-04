const day = prompt("What day is it?");
switch (day) {
case "monday":
console.log("tomorrow is tuesday");
break;
case "tuesday":
console.log("tomorrow is wednesday");
break;
case "wednesday":
console.log("tommorrow is thursday");
break;
case "thursday":
console.log("tomorrow is friday");
break;
case "friday":
console.log("tomorrow is saturday");
break;
case "saturday":
console.log("tomorrow is sunday")
break;
case "sunday":
console.log("tomorrow is monday")
break;
default:
console.log("Not a valid day");
}