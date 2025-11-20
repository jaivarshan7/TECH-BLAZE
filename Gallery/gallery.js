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

/*Video bg*/
const video = document.getElementById("bg-video");
video.addEventListener("pause", () => video.play());