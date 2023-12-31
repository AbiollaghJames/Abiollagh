document.addEventListener("DOMContentLoaded", () => {
    const navbarHeight = document.querySelector("nav").offsetHeight;

    document.querySelectorAll('a[href^="#"').forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                    top: offsetTop - navbarHeight,
                    behavior: "smooth"
                });
            }
        });
    });
    window.addEventListener("scroll", () => {
        const headingOffset = aboutHeading.getBoundingClientRect().top;
        if (headingOffset < 0) {
            aboutHeading.classList.add("fixed-heading");
        } else {
            aboutHeading.classList.remove("fixed-heading");
        }
    });
});