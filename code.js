
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




            function validateForm(){
                let FirstName = document.getElementById("txtFirstName").value.trim();

                let LastName = document.getElementById("txtLastName").value.trim();

                let ZipCode = document.getElementById("txtZipCode").value.trim();


                console.log("FirstName=" + FirstName);
                console.log("LastName=" + LastName);
                console.log("ZipCode=" + ZipCode);

                FullName = FirstName + " " + LastName;

                console.log("FullName=" + FullName);

                if (FullName.length > 20 || FullName.length ==1){
                    message = "Invalid name, please try again.";

                    console.log("Invalid name")
                }

                else if (ZipCode.length != 5){
                     message = "Invalid Zip Code, please try again.";

                    console.log("Invalid Zip Code")
                }

                else{
                    message = "Welcome," +FirstName + ". The secret word is Coders.";
                }

                document.getElementById("divMessage").textContent = message
            }
