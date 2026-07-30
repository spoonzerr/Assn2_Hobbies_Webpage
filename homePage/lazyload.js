// function initialHeroReveal() {
//     const heroImg = document.querySelector
//     const heroText = document.querySelector(".hero_content");
//     if (!heroImg) return;
// }

// function reveal() {
//     heroImg.classList.add("is-loaded");
//     if (heroText) heroText.classList.add("is-visible");
// }

// if (heroImg.complete) {
//     reveal();
// } else {
//     heroImg.addEventListener("load", reveal);
// }

// document.addEventListener("DOMContentLoaded", initHeroReveal);


const images = document.querySelectorAll('.box-image img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.classList.add('loaded');   // <-- this line was missing
      observer.unobserve(img);
    }
  });
}, { threshold: 0.2 });

images.forEach(img => observer.observe(img));