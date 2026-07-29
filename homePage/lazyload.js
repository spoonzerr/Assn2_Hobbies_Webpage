function initialHeroReveal() {
    const heroImg = document.querySelector
    const heroText = document.querySelector(".hero_content");
    if (!heroImg) return;
}

function reveal() {
    heroImg.classList.add("is-loaded");
    if (heroText) heroText.classList.add("is-visible");
}

if (heroImg.complete) {
    reveal();
} else {
    heroImg.addEventListener("load", reveal);
}

document.addEventListener("DOMContentLoaded", initHeroReveal);
