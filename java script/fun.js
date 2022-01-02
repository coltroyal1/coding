let fun= function(){
    console.log("function says hello");
};
// call it fun
fun(); 

let getgreeting = function(name) {
    return "hello" + name
    
};
let greeting = getgreeting("bob");
console.log(greeting)


let greet = function(name, timeofday){
    return "good" + timeofday + ", " + name;
}
//call with multiple arguments
console.log(greet("bob", "evening"));
console.log(greet("isaiah", "evening"))