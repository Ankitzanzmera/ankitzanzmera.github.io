let menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener("click", function(e){
    document.querySelector("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("fa-xmark");
});

let typed = new Typed("#auto-input",{
    strings: ['AI/ML Intern','Data Science Enthusiast',"Life Long Learner","step-by-step improver, just like gradient descent"],
    typeSpeed: 90,
    backSpeed: 40,
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


var hireButton = document.getElementById('hireButton');

hireBtn.addEventListener('click', function() {
    scrollToContact();
});

function scrollToContact() {
    var contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function showPDF() {
    // Get the URL of the PDF file
    var pdfURL = "artifacts/Ankit_zanzmera_resume.pdf";
    window.open(pdfURL, '_blank');
}




