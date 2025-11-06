function testPalin(){
            let userInput = document.getElementById("txtInput").value.trim();

            if(isPalindrome(userInput)){
                document.getElementById("divResult").textContent = "This is a Palindrome!"

            }
            else{
                document.getElementById("divResult").textContent = "This is NOT a Palindrome!"
            }
        }
        

        function isPalindrome(wordToTest){
            let cleanedWord = wordToTest.replace(/\s/g, "")
            
            cleanedWord = cleanedWord.toLowerCase()
            

            let arrCleaned = cleanedWord.split("");
            arrCleaned = arrCleaned.reverse();

            let reversedWord = arrCleaned.join("");
           

            return cleanedWord == reversedWord;
        

        }