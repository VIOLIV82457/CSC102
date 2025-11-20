function addAudio(){
            //create new HTML Audio element//
            let audioElm = document.createElement("audio");
            audioElm.setAttribute("id","myAudio");
            //must be identical in name/same folder as other files
            audioElm.setAttribute("src","039.Spookwave.mp3");
            //adds control dashboard to show audio works
            audioElm.setAttribute("controls", "controls");

            //adding new audio element to empty Div
            document.getElementById("divAudio").appendChild(audioElm);

            //hides addAudio
            document.getElementById("btnAddAudio").hidden = true;

            //opens other buttons
            //document.getElementById("btnPlayAudio").hidden = false;
            //document.getElementById("btnPauseAudio").hidden = false;

        }