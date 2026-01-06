

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

  const video = document.getElementById("bg-video");

  function forcePlay() {
    if (video.paused) {
      video.play().catch(() => {});
    }
  }

  // Initial play
  window.addEventListener("load", forcePlay);

  // Resume if browser pauses it
  video.addEventListener("pause", forcePlay);

  // Resume when tab becomes visible again
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) forcePlay();
  });

  // Resume after resize / inspect
  window.addEventListener("focus", forcePlay);
  window.addEventListener("resize", forcePlay);

/*hambuger icon*/
function display(){
    let hambugermenu=document.getElementById("hambuger-menu")
    hambugermenu.style.display="block"
}

function closedisplay(){
    let hambugermenu=document.getElementById("hambuger-menu")
    hambugermenu.style.display="none"
}