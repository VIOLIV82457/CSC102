//This sets the name for the palindrome and what will appear on screen
function testPalin(){
            let userInput = document.getElementById("txtInput").value.trim();

            if(isPalindrome(userInput)){
                document.getElementById("divResult").textContent = "This is a Palindrome!"

            }
            else{
                document.getElementById("divResult").textContent = "This is NOT a Palindrome!"
            }
        }
        
//This function removes spaces and lowercases the inut to allow a proper palindrome check
        function isPalindrome(wordToTest){
            let cleanedWord = wordToTest.replace(/\s/g, "")
            
            cleanedWord = cleanedWord.toLowerCase()
            

            let arrCleaned = cleanedWord.split("");
//reverses word for palindrome
            arrCleaned = arrCleaned.reverse();

            let reversedWord = arrCleaned.join("");
           

            return cleanedWord == reversedWord;
        

        }