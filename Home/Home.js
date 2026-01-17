

/*FAQ*/
function showans1() {
    document.getElementById("ans1").style.display = "block";
    document.getElementById("Que1").style = "color: #ef38fcff; margin: 0 auto";
}
function showans2() {
    document.getElementById("ans2").style.display = "block";
    document.getElementById("Que2").style = "color: #ef38fcff;margin: 0 auto";

}

function showans3() {
    document.getElementById("ans3").style.display = "block";
    document.getElementById("Que3").style = "color: #ef38fcff;margin: 0 auto";
}

function showans4() {
    document.getElementById("ans4").style.display = "block";
    document.getElementById("Que4").style = "color: #ef38fcff;margin: 0 auto";
}

function showans5() {
    document.getElementById("ans5").style.display = "block";
    document.getElementById("Que5").style = "color: #ef38fcff;margin: 0 auto";

}

/*date*/
function dated() {
    document.getElementById("date").display = "none";
}
setInterval(() => {
    dated()
}, 2000);

/*timer*/
var countDownDate = new Date("Feb 27, 2026, 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("days-count").innerHTML = days;
    document.getElementById("hours-count").innerHTML = hours;
    document.getElementById("minutes-count").innerHTML = minutes;
    document.getElementById("seconds-count").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

//video

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




// Timeline Tab Switcher
function switchDay(dayId) {
    // Hide all containers
    document.querySelectorAll('.timeline-container').forEach(el => {
        el.classList.remove('active');
    });

    // Deactivate all buttons
    document.querySelectorAll('.timeline-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected day
    document.getElementById(dayId).classList.add('active');

    // Activate clicked button
    const btns = document.querySelectorAll('.timeline-btn');
    if (dayId === 'day1') btns[0].classList.add('active');
    else btns[1].classList.add('active');
}
// Firebase Analytics moved to Shared/analytics.js
