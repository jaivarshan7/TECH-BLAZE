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


let coms=document.querySelectorAll(".com");
coms.forEach(com=>{
    com.addEventListener("click",()=>{
        coms.forEach(c=>c.classList.remove("active"));

        com.classList.add("active");
    })

})



