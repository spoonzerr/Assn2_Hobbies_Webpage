/* =========================================================
   fadeIn.js
   1. Homepage: .box-image img + .box-text slide in
   2. Hobby pages: generic .reveal elements
   Each function exit early when its elements not on the
   page, so both pages load same file safely.
   ========================================================= */

/* ---------- 1. Homepage images ---------- */
function initImageFade() {
    const images = document.querySelectorAll(".box-image img");
    if (!images.length) return;

    if (!("IntersectionObserver" in window)) {
        images.forEach(img => img.classList.add("loaded"));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const img = entry.target;
            if (entry.isIntersecting) {
                if (!img.src && img.dataset.src) img.src = img.dataset.src;
                img.classList.add("loaded");
            } else {
                img.classList.remove("loaded");
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));
}

/* ---------- 2. Homepage text ---------- */
function initTextReveal() {
    const blocks = document.querySelectorAll(".box-text");
    if (!blocks.length) return;

    if (!("IntersectionObserver" in window)) {
        blocks.forEach(el => el.classList.add("is-revealed"));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("is-revealed", entry.isIntersecting);
        });
    }, { threshold: 0.25 });

    blocks.forEach(el => observer.observe(el));
}

/* ---------- 3. Hobby pages ---------- */
function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
        items.forEach(el => el.classList.add("is-revealed"));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });

    items.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", function () {
    initImageFade();
    initTextReveal();
    initReveal();
});

/* Safety net: if anything above throws before the observers are
   attached, show everything rather than leaving a blank page. */
window.addEventListener("error", function () {
    document.querySelectorAll(".reveal, .box-text").forEach(el => {
        el.classList.add("is-revealed");
    });
});