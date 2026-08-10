/* =========================================================
   guitar.js
   page-specific behaviour
   1. Skill bars fill when they scroll into view
   2. Stat numbers count up when they scroll into view
   Both respect prefers-reduced-motion and both fall back to
   the final value if IntersectionObserver is not available.
   ========================================================= */

const STILL = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const NO_OBSERVER = !("IntersectionObserver" in window);

/* ---------- 1. skill bars ---------- */
function initSkillBars() {
    const bars = document.querySelectorAll(".progress-bar[data-fill]");
    if (!bars.length) return;

    // no animation wanted or possible — just set the widths
    if (STILL || NO_OBSERVER) {
        bars.forEach(bar => bar.style.width = bar.dataset.fill + "%");
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            const bar = entry.target;
            bar.style.width = bar.dataset.fill + "%";
            observer.unobserve(bar); 
        });
    }, { threshold: 0.4 });

    bars.forEach(bar => observer.observe(bar));
}

/* ---------- 2. stat count-up ---------- */
function initStatCount() {
    const values = document.querySelectorAll("[data-count]");
    if (!values.length) return;

    if (STILL || NO_OBSERVER) {
        values.forEach(el => el.textContent = el.dataset.count);
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            countUp(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    values.forEach(el => observer.observe(el));
}

function countUp(el) {
    const target = Number(el.dataset.count);
    const duration = 900;
    const start = performance.now();

    function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        // ease-out cubic: quick at first, settling at the end
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

document.addEventListener("DOMContentLoaded", function () {
    initSkillBars();
    initStatCount();
});