        let intervalID = 0;
        function startMove(){
            let image = document.getElementById("memeimage")

            intervalID = setInterval(function(){
                //runs on repeat
                let xCord = getRandNum();
                let yCord = getRandNum();

                image.style.left = xCord + "px";
                image.style.top = yCord + "px";

            },1000); //every second

            //swap the enabled button

            document.getElementById("btnStart").disabled=true;
            document.getElementById("btnStop").disabled=false;
        }

        function stopMove(){
            clearInterval(intervalID);

             document.getElementById("btnStart").disabled=false;
            document.getElementById("btnStop").disabled=true;
        }

//random number generator
        function getRandNum(){
            return Math.floor(Math.random() * 750);

        }