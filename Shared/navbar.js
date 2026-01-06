
// Navbar functions extracted for shared use

function Showabout(){
    const el = document.getElementById("about");
    if(el) el.style.display="block"; 
}
function Hideabout(){
    const el = document.getElementById("about");
    if(el) el.style.display="none"; 
}

function Showevent(){
    const el = document.getElementById("event");
    if(el) el.style.display="block";    
}
function Hideevent(){
    const el = document.getElementById("event");
    if(el) el.style.display="none"; 
}

function display(){
    let hambugermenu=document.getElementById("hambuger-menu")
    if(hambugermenu) hambugermenu.style.display="block"
}

function closedisplay(){
    let hambugermenu=document.getElementById("hambuger-menu")
    if(hambugermenu) hambugermenu.style.display="none"
}

// Profile functions (used in Contact page)
function Showprofile(){
    const el = document.getElementById("profiledetail");
    if(el) el.style.display="block";
}
function hideprofile(){
    const el = document.getElementById("profiledetail");
    if(el) el.style.display="none";
}


function toggleMobileAbout() {
    const submenu = document.getElementById("mobile-about-submenu");
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}
