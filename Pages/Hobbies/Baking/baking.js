/* ============================================================
   BAKING PAGE SCRIPT
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* Auto Image Switcher for Cards */
    const enjoyCards = document.querySelectorAll(".enjoy-card");

    enjoyCards.forEach((card) => {
        const images = card.querySelectorAll(".slideshow-box img");

        if (images.length > 1) {
            let photoIndex = 0;

            setInterval(() => {
                images[photoIndex].classList.remove("active");
                photoIndex = (photoIndex + 1) % images.length;
                images[photoIndex].classList.add("active");
            }, 3500);
        }
    });

    /* Manual Photo Slider for Popular Bakes */
    const placeSliders = document.querySelectorAll(".place-photo-slider");

    placeSliders.forEach((slider) => {
        const images = slider.querySelectorAll("img");
        const dots = slider.querySelectorAll(".dot");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");
        let currentPhoto = 0;

        function showPhoto(photoIndex) {
            images.forEach((img) => img.classList.remove("active"));
            dots.forEach((dot) => dot.classList.remove("active"));

            images[photoIndex].classList.add("active");
            if (dots[photoIndex]) {
                dots[photoIndex].classList.add("active");
            }
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                currentPhoto = (currentPhoto + 1) % images.length;
                showPhoto(currentPhoto);
            });

            prevBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                currentPhoto = (currentPhoto - 1 + images.length) % images.length;
                showPhoto(currentPhoto);
            });
        }
    });

    /* Back To Top Scroll Logic */
    const topBtn = document.getElementById("backToTopBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});