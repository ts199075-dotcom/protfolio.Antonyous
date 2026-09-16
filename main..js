const themeBtn = document.querySelector(".theme-btn");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


// ================= THEME =================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }

});


// ================= MOBILE MENU =================

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close menu after clicking a link

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});