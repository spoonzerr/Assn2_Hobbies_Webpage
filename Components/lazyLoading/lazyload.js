


const images = document.querySelectorAll('.box-image img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const img = entry.target;
    if (entry.isIntersecting) {
      if (!img.src) img.src = img.getAttribute('data-src'); // only set src once
      img.classList.add('loaded');
    } else {
      img.classList.remove('loaded'); // reset so it can animate in again next time
    }
  });
}, { threshold: 0.2 });

images.forEach(img => observer.observe(img));

function initTextReveal() {
  const blocks = document.querySelectorAll(".box-text");
  if (!blocks.length) return;

  if (!("IntersectionObserver" in window)) {
    blocks.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
      } else {
        entry.target.classList.remove("is-revealed");
      }
    });
  }, { threshold: 0.25 });

  blocks.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", initTextReveal);