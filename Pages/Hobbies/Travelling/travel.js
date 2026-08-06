document.addEventListener("DOMContentLoaded", () => {

    /* ============================================================
       FEATURE 1: "What People Enjoy" - Auto Cross-Fade Slideshow
       Purpose: Automatically cycles through preview images inside
       each card like a continuous video preview.
    ============================================================ */
    const enjoyCards = document.querySelectorAll(".enjoy-card");

    enjoyCards.forEach((card) => {
        const images = card.querySelectorAll(".slideshow-box img");

        if (images.length > 1) {
            let currentIndex = 0;

            setInterval(() => {
                images[currentIndex].classList.remove("active");
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add("active");
            }, 3500); // Swaps image every 3.5 seconds
        }
    });


    /* ============================================================
       FEATURE 2: "Top 10 Places" - Interactive Photo Switcher
       Purpose: Lets users click next/prev arrows to cycle through
       photos (food, scenery, culture) and updates the dot indicators (...).
    ============================================================ */
    const placeSliders = document.querySelectorAll(".place-photo-slider");

    placeSliders.forEach((slider) => {
        const images = slider.querySelectorAll("img");
        const dots = slider.querySelectorAll(".dot");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");
        let currentIdx = 0;

        function updateSlider(index) {
            // Remove active state from all photos and dots
            images.forEach((img) => img.classList.remove("active"));
            dots.forEach((dot) => dot.classList.remove("active"));

            // Activate current photo and corresponding dot
            images[index].classList.add("active");
            if (dots[index]) {
                dots[index].classList.add("active");
            }
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                currentIdx = (currentIdx + 1) % images.length;
                updateSlider(currentIdx);
            });

            prevBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                currentIdx = (currentIdx - 1 + images.length) % images.length;
                updateSlider(currentIdx);
            });
        }
    });


    /* ============================================================
       FEATURE 3: Back-To-Top Button
       Purpose: Appears when scrolling down and smoothly scrolls back
       to the top when clicked.
    ============================================================ */
    const backToTopBtn = document.getElementById("backToTopBtn");

    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});