// ==========================================
// INDICUS WEBSITE - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // 1. MOBILE NAVIGATION
    // ======================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            const isOpen = navLinks.classList.contains("show");

            menuToggle.textContent = isOpen ? "✕" : "☰";

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        // Close menu after clicking a link

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

    }


    // ======================================
    // 2. SCROLL ANIMATIONS
    // ======================================

    const animatedSections = document.querySelectorAll(
        ".about, .team, .recruitment"
    );

    if ("IntersectionObserver" in window) {

        const animationObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        animationObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedSections.forEach(section => {
            animationObserver.observe(section);
        });

    } else {

        animatedSections.forEach(section => {
            section.classList.add("visible");
        });

    }


    // ======================================
    // 3. ACTIVE NAVIGATION HIGHLIGHT
    // ======================================

    const navItems = document.querySelectorAll(".nav-links a");

    const pageSections = document.querySelectorAll(
        "main section[id]"
    );

    if ("IntersectionObserver" in window) {

        const navObserver = new IntersectionObserver(
            function (entries) {

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

            },
            {
                threshold: 0.4
            }
        );

        pageSections.forEach(section => {
            navObserver.observe(section);
        });

    }


    // ======================================
    // 4. RECRUITMENT FORM
    // ======================================

    const applicationForm = document.getElementById(
        "applicationForm"
    );

    const formMessage = document.getElementById(
        "formMessage"
    );

    const submitButton = document.getElementById(
        "submitButton"
    );

    if (applicationForm) {

        applicationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Validate form

            if (!applicationForm.checkValidity()) {

                applicationForm.reportValidity();

                return;

            }

            // Backend is not connected yet

            if (formMessage) {

                formMessage.textContent =
                    "Application form is ready! Backend integration is still required to submit your application.";

            }

            console.log("INDICUS recruitment form validated.");

        });

    }


    // ======================================
    // 5. CHARACTER COUNTER
    // ======================================

    const reasonField = document.getElementById("reason");

    if (reasonField) {

        const characterInfo = document.querySelector(
            ".character-info"
        );

        reasonField.addEventListener("input", function () {

            if (characterInfo) {

                characterInfo.textContent =
                    reasonField.value.length + " / 1000 characters";

            }

        });

    }


    console.log("INDICUS website loaded successfully.");

});
