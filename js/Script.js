document.getElementById("NBA").onclick = function() {NBAFunction()};

var a = document.getElementById("DisplayV");
var b = document.getElementById("NBAv");
function NBAFunction() {
    a.src = "img/Fortnight.mp4"
    a.load();
    console.log ("CLICK");
}