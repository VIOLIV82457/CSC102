 let poison1 = "Belladona";
        let poison2 = "Cassava";
        let poison3 = "Arsenic";
        let poison4 = "Hemlock";
        let poison5 = "Wolfsbane";
//stores plant list - Array = Data Structure
        let arrPoison = ["Belladona", "Cassava", "Arsenic", "Hemlock", "Wolfsbane"]
//Add poison
        function addPoison(){
            let newPoison = document.getElementById("txtNewPoison").value;

            arrPoison.push(newPoison)

            //Updates the showing list
            showPoison();
        }

//will loop and show in ul
//li is List Item
        function showPoison(){
            let ulPoisons = document.getElementById("ulPoisons");
            //remove already existing plants
            ulPoisons.innerHTML = "";

            arrPoison.forEach(function(poison, index){
                let li = document.createElement("li");
                li.textContent = poison;

                //adding event handler
                li.ondblclick = function(){
                    if(confirm('Remove ' + poison + '?')){
                        arrPoison.splice(index,1);
                        showPoison();
                    }
                };
//adds new to og list
                ulPoisons.appendChild(li);
            });
        }
//Initial loading of list
        showPoison();
