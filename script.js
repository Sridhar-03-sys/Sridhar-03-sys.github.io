// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
    });
});

// Back to Top Button
const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
    if (backToTop) {
        backToTop.classList.toggle("show", window.scrollY > 300);
    }
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Current Year
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}