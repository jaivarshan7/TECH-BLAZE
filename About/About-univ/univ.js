function Showabout(){
    
    document.getElementById("about").style.display="block" ;    
}
function Hideabout(){
    document.getElementById("about").style.display="none" ; 
}
function Showevent(){
    
    document.getElementById("event").style.display="block" ;    
}
function Hideevent(){
    document.getElementById("event").style.display="none" ; 
}

var countDownDate = new Date("Feb 5, 2026, 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("days-count").innerHTML = days ;
  document.getElementById("hours-count").innerHTML=hours;
  document.getElementById("minutes-count").innerHTML = minutes;
  document.getElementById("seconds-count").innerHTML=seconds;
    
   if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);