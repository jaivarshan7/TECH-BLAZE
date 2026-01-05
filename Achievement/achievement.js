//About and Event
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

//Mode
function lightmode(){
    document.getElementById("darkmode").style.backgroundColor="black";
    document.getElementById("darkmode").style.color="white"
    //Mode-logo
    let darkmode=document.getElementById("darkmode")
    darkmode.innerText="Lightmode"
    //nav bar
    let navbar=document.getElementById("nav-bar").style.backgroundColor="white"; 
    //logo
    document.getElementById("logo").style.color="black"
    //Menu (Home,about..)
    document.querySelectorAll(".menu").forEach(el => {
        el.style.color="black"
    });
    //Overall background of container
    document.getElementById("app-container").style.backgroundColor="black"; 
    //title
    document.getElementById("title").style.color="white"
    //footer content
    document.getElementById("footer").style.backgroundColor="white"
    //footer Get-in-touch
    document.getElementById("Get-in-touch").style.color="black"
    //footer para-address
    document.querySelectorAll(".para-address").forEach(el=>{
        el.style.color="black"
    })
    //footer Explore
    document.getElementById("Explore").style.color="black"
    //Footer icon
    document.querySelectorAll('.fa-brands').forEach(el => {
        
        el.style.color = "black";
    });
    //footer media
    document.querySelectorAll('.media').forEach(el => {
       
        el.style.color = "black";
    });

    
}
function darkmode(){
    document.getElementById("darkmode").style.backgroundColor="white";
    document.getElementById("darkmode").style.color="black"
    //Mode-logo
    let darkmode=document.getElementById("darkmode")
    darkmode.innerText="Darkmode"
    //nav bar
    let navbar=document.getElementById("nav-bar").style.backgroundColor="black"; 
    //logo
    document.getElementById("logo").style.color="white"
    //Menu (Home,about..)
    document.querySelectorAll(".menu").forEach(el => {
        el.style.color="white"
    });
    //footer para-address
    document.querySelectorAll(".para-address").forEach(el=>{
        el.style.color="white"
    })
     //Overall background of container
    document.getElementById("app-container").style.backgroundColor="white"; 
    //title
    document.getElementById("title").style.color="black"
     //footer content
    document.getElementById("footer").style.backgroundColor="black"
     //footer Get-in-touch
    document.getElementById("Get-in-touch").style.color="white"
    //Explore
    document.getElementById("Explore").style.color="white"
    //Footer icon
    document.querySelectorAll('.fa-brands').forEach(el => {
        
        el.style.color = "white";
    });
    //footer media
    document.querySelectorAll('.media').forEach(el => {
        
        el.style.color = "white";
    });
}

function detail(){
    let val=document.getElementById("achievers")

    let eventname=["Web-O-Spider","Hacker Rank","Code Craft","Data Dive","QuizKwiz","nothing"]

    eventname.forEach(event=> {
        if (val.value==event){
            let currentevent=document.getElementById(event)
            currentevent.style.visibility="visible";


            eventname.forEach(preevent=>{
                if (preevent!=event){
                    let prevevent=document.getElementById(preevent)
                    prevevent.style.visibility="hidden";
                }
            })
            
        }


    })

    
    
}