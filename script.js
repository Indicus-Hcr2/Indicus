// ==================================
// INDICUS WEBSITE JAVASCRIPT
// ==================================

document.addEventListener("DOMContentLoaded", () => {

    // MOBILE NAVIGATION

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // CLOSE MOBILE MENU WHEN LINK IS CLICKED

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // SECTION SCROLL ANIMATIONS

    const sections = document.querySelectorAll(
        ".about, .team, .recruitment"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    sections.forEach(section => {
        observer.observe(section);
    });


    // NAVIGATION ACTIVE STATE

    const navItems = document.querySelectorAll(".nav-links a");

    const pageSections = document.querySelectorAll(
        "main section[id]"
    );

    const navObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navItems.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }, {
        threshold: 0.4
    });

    pageSections.forEach(section => {
        navObserver.observe(section);
    });

});
