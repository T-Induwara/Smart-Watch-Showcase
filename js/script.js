console.log("Script Loaded!")

var watchBand = document.getElementById("band-section");

var blackBtn = document.getElementById("black-btn");
var blueBtn = document.getElementById("blue-btn");
var redBtn = document.getElementById("red-btn");
var purpleBtn = document.getElementById("purple-btn");
var roseBtn = document.getElementById("rose=btn");

var timeBtn = document.getElementById("time-btn");
var heartBtn = document.getElementById("heart-btn");
var butBtn = document.getElementById("buy-btn");

blackBtn.onclick = function(){
    alert("You clicked Black button!");
}
blueBtn.onclick = function(){
    alert("You clicked Blue button!");
    watchBand.classList.remove=("watch.band-black");
    watchBand.classList.add=("watch.band.blue");

}