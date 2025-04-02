document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-custom");
    const section = document.querySelector("section"); // Primer section de la página

    window.addEventListener("scroll", function () {
        if (window.scrollY > section.offsetTop - navbar.offsetHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
