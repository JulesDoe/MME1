//document.getElementByName("suche").onchange = suchen;

function suchen() {
    var suche = document.getElementById("suche");
    var elements = document.getElementsByTagName('h2');
    var namen = ["Dexter", "Breaking Bad" , "Game of Thrones" , "Grey's Anatomy"];
    var ids = ["dexter"    , "breakingbad" , "gameofthrones", "greyanatomy"];
    var hidecounter = 0;

    for (var i = 0; i < namen.length; i++) {
        var div = document.getElementById(ids[i]);

        if (namen[i].search(suche.value) == -1)//  && suche.value.length >= 3
        {	//Ausblenden

            // div.classList.add("fade");


            div.addEventListener("animationend", aniEnd);
            if (div.classList.contains("fadeIn")) {
                div.classList.remove("fadeIn");
                div.style.animationIterationCount = parseInt(div.style.animationIterationCount) + 1;

            }

            div.classList.remove("fadeInDown");
            div.classList.add("zoomOutLeft");
            hidecounter++;
        }
        else // Anzeigen
        {
            div.removeEventListener("animationend", aniEnd);
            div.classList.remove("fade");
            if (div.classList.contains("zoomOutLeft")) {
                div.classList.remove("zoomOutLeft");

                //div.classList.add("fadeIn");

                div.style.animationIterationCount = parseInt(div.style.animationIterationCount) + 1;
                hidecounter--;
            }

        }
    }
    console.log(hidecounter);
    var hideout = document.getElementById("noitems");
    if (hidecounter >= namen.length) {
        var hideout = document.getElementById("noitems");
        hideout.style.display = "block";
    }
    else {
        hideout.style.display = "none";
    }

    function aniEnd(div) {
        div.target.classList.add("fade");
        //console.log(div.target);
    }

}