function Showabout(){
    
    document.getElementById("about").style.display="block" ; 
}
function Hideabout(){
    document.getElementById("about").style.display="none" ; 
}

/*Video bg*/
const video = document.getElementById("bg-video");
video.addEventListener("pause", () => video.play());
