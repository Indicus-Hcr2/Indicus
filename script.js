// INDICUS WEBSITE JAVASCRIPT

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(
        ".about, .team, .recruitment"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});