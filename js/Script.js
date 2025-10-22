document.getElementById("NBA").onclick = function() {NBAFunction()};




var a = document.getElementById("DisplayV");
var b = document.getElementById("NBA");


function NBAFunction() {
    a.src = "img/NBAgot.mp4"
    a.load();
    console.log ("CLICK");
}

