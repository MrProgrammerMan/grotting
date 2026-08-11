document.addEventListener("DOMContentLoaded", () => {
const logo = document.querySelector("header .logo");

// Add or remove the 'expanded' class based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
    logo.classList.remove("expanded");
    } else if (window.scrollY < 5) {
    logo.classList.add("expanded");
    }
});
});