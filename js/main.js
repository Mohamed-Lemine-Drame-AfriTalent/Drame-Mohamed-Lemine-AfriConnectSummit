/* MODE SOMBRE */

const themeToggle = document.getElementById("theme-toggle");
let theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class ="fa-solid fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class ="fa-solid fa-moon"></i>';
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class ="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class ="fa-solid fa-moon"></i>';
    }
});

/* MENU HAMBURGER */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
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
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
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

if (filterButtons.length > 0) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const filter = button.dataset.filter;

            cards.forEach(card => {

                if (filter === "all" || card.dataset.category === filter) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

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

const targetDate = new Date("November 15, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h3>La conférence a commencé !</h3>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

if(daysElement && hoursElement && minutesElement && secondsElement){

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;

}
}

updateCountdown();

setInterval(updateCountdown, 1000);

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.ceil(target / 100);

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    counter.textContent = target;

                    clearInterval(timer);

                } else {

                    counter.textContent = current;

                }

            }, 30);

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let valide = true;

        const nom = document.getElementById("nom");
        const email = document.getElementById("email");
        const sujet = document.getElementById("sujet");
        const message = document.getElementById("message");

        document.querySelectorAll(".error").forEach(error => {
            error.textContent = "";
        });

        if (nom.value.trim() === "") {
            document.getElementById("nom-error").textContent = "Veuillez saisir votre nom.";
            valide = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value)) {
            document.getElementById("email-error").textContent = "Adresse email invalide.";
            valide = false;
        }

        if (sujet.value === "") {
            document.getElementById("sujet-error").textContent = "Choisissez un sujet.";
            valide = false;
        }

        if (message.value.trim().length < 20) {
            document.getElementById("message-error").textContent = "Le message doit contenir au moins 20 caractères.";
            valide = false;
        }

        if (valide) {
            document.getElementById("success").textContent =
                "Votre message a été envoyé avec succès !";
            form.reset();
        }

    });

}

const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}