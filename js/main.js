/* MODE SOMBRE */

const themeToglle = document.getElementById("theme-toggle");
let theme = localStorage.getItem("theme");
if(theme === "dark"){
    document.body.classList.add("dark-mode");
    themeToglle.innerHTML = '<i class ="fa-solid fa-sun"></i>';
} else {
    themeToglle.innerHTML = '<i class ="fa-solid fa-moon"></i>';
}

themeToglle.addEventListener("click", () =>{
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
        themeToglle.innerHTML = '<i class ="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "light");
        themeToglle.innerHTML = '<i class ="fa-solid fa-moon"></i>';
    }
});

/* MENU HAMBURGER */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
}
/* NAVBAR DYNAMIQUE */


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* BOUTON RETOUR */

const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(tab => tab.classList.remove("active"));

        button.classList.add("active");

        document
            .getElementById(button.dataset.day)
            .classList.add("active");

    });

});

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".speaker-card");

if(filterButtons.length > 0){

    filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            filterButtons.forEach(btn=>btn.classList.remove("active"));

            button.classList.add("active");

            const filter = button.dataset.filter;

            cards.forEach(card=>{

                if(filter==="all" || card.dataset.category===filter){

                    card.style.display="block";

                }else{

                    card.style.display="none";

                }

            });

        });

    });

}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".fade-in, .slide-in, .zoom-in").forEach(section => {
    observer.observe(section);
});