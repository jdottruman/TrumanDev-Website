const hamburger = document.querySelector(".nav__hamburger");
const linksContainer = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu__link");

hamburger.addEventListener("click",()=>{

    linksContainer.classList.toggle("active");
    hamburger.classList.toggle("active")

})
window.addEventListener("resize",()=>{
    if(window.matchMedia("(max-width:550px)").matches){
        closeMenu()
    }
})

if(window.matchMedia("(max-width:550px)")){
    closeMenu()
}

function closeMenu(){

links.forEach((link)=>{
link.addEventListener("click",
()=>{
linksContainer.classList.remove("active")
hamburger.classList.remove("active")

})

})

}

function darkMode() {
    const body = document.body;
    const darkModeEnabled = body.classList.toggle("dark-mode");   
// creating a variable for the darkmode class initaklized to the body
    // Change button icon based on dark mode status
    const boltIcon = document.getElementById("bolt");
    if (darkModeEnabled) {
        boltIcon.classList.remove("fa-bolt");
        boltIcon.classList.add("fa-moon");
    } else {
        boltIcon.classList.remove("fa-moon");
        boltIcon.classList.add("fa-bolt");
    }
}



document.getElementById('scrollToTop').addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});



window.addEventListener('scroll',()=>{
    const scrollToTopBtn= document.getElementById('scrollToTop');
    if (window.scrollY > 200){
        scrollToTopBtn.classList.add('show')
    }else{
scrollToTopBtn.classList.remove('show')
    }
})
