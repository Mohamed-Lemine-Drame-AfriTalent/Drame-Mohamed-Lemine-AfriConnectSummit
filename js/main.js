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
        themeToglle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToglle.textContent = "🌙"
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

// const navbar = document.querySelector(".navbar");
// window.addEventListener("scroll", () => {
//     if(window.scrolly > 80){
//         navbar.style.background = "rgba(255,255,255,0.95)";
//         navbar.style.backdropFilter = "blur(10px)";
//         navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
//     } else {
//          navbar.style.background = "";
//         navbar.style.backdropFilter = "";
//         navbar.style.boxShadow = "";
//     }
// });

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