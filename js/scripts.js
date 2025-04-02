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

document.addEventListener("DOMContentLoaded", function () {
    const scrollIcon = document.getElementById("scrollIcon");
    
    if (scrollIcon) {
        scrollIcon.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector("#about");

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar");

    function setActiveLink() {
        let scrollPosition = window.scrollY;

        // Si el usuario scrollea, se activa el efecto
        if (scrollPosition > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Cambiar la sección activa
        links.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= scrollPosition + 100 &&
                section.offsetTop + section.offsetHeight > scrollPosition + 100) {
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveLink);
    setActiveLink(); // Ejecutar al cargar la página
});

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar-custom");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
