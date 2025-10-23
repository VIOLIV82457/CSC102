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