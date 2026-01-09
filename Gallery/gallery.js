
/*Video bg*/
const video = document.getElementById("bg-video");

function forcePlay() {
  if (video.paused) {
    video.play().catch(() => { });
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
