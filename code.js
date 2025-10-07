
function playCraps(){

let roll1 = rollDice();
let roll2 = rollDice();

let sum = roll1 + roll2

document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;
document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;
document.getElementById("divSum").textContent = "Your Total: " + sum;

let result = ""

if (sum == 7 || sum == 11){
    result = "You lost :("
}
else if(roll1 % 2 == 0 && roll1 == roll2){
    result = "Winner winner, chicken dinner"
}
else{
    result = "¯\\_(ツ)_/¯"
}
document.getElementById("divResult").textContent = result;

}
function rollDice(){
let die = Math.random() * 6;
return Math.ceil(die);
}