var user = prompt("Enter your name, please:", "Bilbo Baggins");
if (user != null) {
    document.getElementById("greeting").innerHTML = "Greetings, " + user + "!";
}