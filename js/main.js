let menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener("click", function(e){
    document.querySelector("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("fa-xmark");
});

let typed = new Typed("#auto-input",{
    strings: ['ML Engineer','Life Long Learner',"DL Engineer"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
});


const navbar  = document.getElementById("nav-option");
const links = document.getElementsByTagName("a");

for (let i = 0; i<links.length; i++){
    links[i].addEventListener("click",function(){
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","");
        this.className ="active";
    });
};