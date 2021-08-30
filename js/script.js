console.log("Script Loaded!")

var watchBand = document.getElementById("band-section");

var blackBtn = document.getElementById("black-btn");
var blueBtn = document.getElementById("blue-btn");
var redBtn = document.getElementById("red-btn");
var purpleBtn = document.getElementById("purple-btn");
var roseBtn = document.getElementById("rose-btn");

var timeBtn = document.getElementById("time-btn");
var heartBtn = document.getElementById("heart-btn");
var buyBtn = document.getElementById("buy-btn");

//Codes for button shadows begins
blackBtn.onmousedown = function(){
   blackBtn.classList.add("btn-shadow"); 
}
blackBtn.onmouseup = function(){
    blackBtn.classList.remove("btn-shadow");
}
blueBtn.onmousedown = function(){
    blueBtn.classList.add("btn-shadow"); 
 }
 blueBtn.onmouseup = function(){
     blueBtn.classList.remove("btn-shadow");
 }
 redBtn.onmousedown = function(){
    redBtn.classList.add("btn-shadow"); 
 }
 redBtn.onmouseup = function(){
     redBtn.classList.remove("btn-shadow");
 }
 purpleBtn.onmousedown = function(){
    purpleBtn.classList.add("btn-shadow"); 
 }
 purpleBtn.onmouseup = function(){
     purpleBtn.classList.remove("btn-shadow");
 }
 roseBtn.onmousedown = function(){
    roseBtn.classList.add("btn-shadow"); 
 }
 roseBtn.onmouseup = function(){
     roseBtn.classList.remove("btn-shadow");
 }
 timeBtn.onmousedown = function(){
    timeBtn.classList.add("btn-shadow"); 
 }
 timeBtn.onmouseup = function(){
     timeBtn.classList.remove("btn-shadow");
 }
 heartBtn.onmousedown = function(){
    heartBtn.classList.add("btn-shadow"); 
 }
 heartBtn.onmouseup = function(){
     heartBtn.classList.remove("btn-shadow");
 }
 buyBtn.onmousedown = function(){
    buyBtn.classList.add("btn-shadow"); 
 }
 buyBtn.onmouseup = function(){
     buyBtn.classList.remove("btn-shadow");
 }
 //comments for button shadows ends

 blackBtn.onclick = function(){
     watchBand.style.backgroundImage = "url('../img/bands/black.png')";
 }
 blueBtn.onclick = function(){
     watchBand.style.backgroundImage = "url('../img/bands/blue.png')";
 }
 redBtn.onclick = function(){
    watchBand.style.backgroundImage = "url('../img/bands/red.png')";
}
purpleBtn.onclick = function(){
    watchBand.style.backgroundImage = "url('../img/bands/purple.png')";
}
roseBtn.onclick = function(){
    watchBand.style.backgroundImage = "url('../img/bands/pink.png')";
}


//watch face clock codes begins
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();
  //watch face clock codes ends