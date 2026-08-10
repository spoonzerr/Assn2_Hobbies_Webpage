document.addEventListener("DOMContentLoaded", () => {

    /* auto slideshow for why i enjoy part */
    const enjoyCards = document.querySelectorAll(".enjoy-card");

    enjoyCards.forEach((card) => {
        const images = card.querySelectorAll(".slideshow-box img");

        if (images.length > 1) {
            let photoIndex = 0;

            // Swap images every 3.5 seconds
            setInterval(() => {
                images[photoIndex].classList.remove("active");
                photoIndex = (photoIndex + 1) % images.length;
                images[photoIndex].classList.add("active");
            }, 3500);
        }
    });


    /* Photo arrows and dots switcher for "top 5 places"*/
    const placeSliders = document.querySelectorAll(".place-photo-slider");

    placeSliders.forEach((slider) => {
        const images = slider.querySelectorAll("img");
        const dots = slider.querySelectorAll(".dot");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");
        let currentPhoto = 0;

        function showPhoto(photoIndex) {
            // Hide all photos and turn off dots
            images.forEach((img) => img.classList.remove("active"));
            dots.forEach((dot) => dot.classList.remove("active"));

            // Show selected photo and activate dot
            images[photoIndex].classList.add("active");
            if (dots[photoIndex]) {
                dots[photoIndex].classList.add("active");
            }
        }

        if (nextBtn && prevBtn) {
            // Click right arrow
            nextBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                currentPhoto = (currentPhoto + 1) % images.length;
                showPhoto(currentPhoto);
            });

            // Click left arrow
            prevBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                currentPhoto = (currentPhoto - 1 + images.length) % images.length;
                showPhoto(currentPhoto);
            });
        }
    });


    /* back to top button*/
    const topBtn = document.getElementById("backToTopBtn");

    if (topBtn) {
        // Show button when scrolling down 300px
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        });

        // Smooth scroll to top on click
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});