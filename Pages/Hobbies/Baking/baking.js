document.addEventListener("DOMContentLoaded", () => {

    /* ============================================================
       Bake timeline — steps fade/slide in as they scroll into view
    ============================================================ */
    const timelineSteps = document.querySelectorAll(".timeline-step");

    if (timelineSteps.length) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        timelineSteps.forEach((step, i) => {
            // Staggers the reveal left-to-right without needing separate CSS rules per step
            step.style.transitionDelay = `${i * 0.12}s`;
            timelineObserver.observe(step);
        });
    }


    /* ============================================================
       Photo arrows and dots switcher for "5 Bakes to Master"
    ============================================================ */
    const bakeSliders = document.querySelectorAll(".bake-photo-slider");

    bakeSliders.forEach((slider) => {
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


    /* ============================================================
       Back to top scroll button logic
    ============================================================ */
    const topBtn = document.getElementById("backToTopBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            topBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

});