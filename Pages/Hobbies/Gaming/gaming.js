/* =========================================================
   gaming.js — page-specific behaviour
   Counts the numeric stats up when they scroll into view.
   Non-numeric values (PC, Top 1-2%) have no data-count, so
   they're skipped.
   ========================================================= */

function initStatCount() {
    const values = document.querySelectorAll("[data-count]");
    if (!values.length) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // No animation wanted or possible — write the final number and stop
    if (still || !("IntersectionObserver" in window)) {
        values.forEach(el => el.textContent = padded(el.dataset.count));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            countUp(entry.target);
            observer.unobserve(entry.target);   // count once
        });
    }, { threshold: 0.5 });

    values.forEach(el => observer.observe(el));
}

function countUp(el) {
    const target = Number(el.dataset.count);
    const duration = 900;
    const start = performance.now();

    function frame(now) {/* =========================================================
   gaming.js — page-specific behaviour
   Counts the numeric stats up when they scroll into view.
   Non-numeric values (PC, Top 1-2%) have no data-count, so
   they're skipped.
   ========================================================= */

function initStatCount() {
    const values = document.querySelectorAll("[data-count]");
    if (!values.length) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // No animation wanted or possible — write the final number and stop
    if (still || !("IntersectionObserver" in window)) {
        values.forEach(el => el.textContent = padded(el.dataset.count));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            countUp(entry.target);
            observer.unobserve(entry.target);   // count once
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
        el.textContent = padded(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

/* keeps 8 displaying as "08" to match the design */
function padded(n) {
    return String(n).padStart(2, "0");
}

document.addEventListener("DOMContentLoaded", initStatCount);
        const progress = Math.min((now - start) / duration, 1);
        // ease-out cubic: quick at first, settling at the end
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = padded(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

/* keeps 8 displaying as "08" to match the design */
function padded(n) {
    return String(n).padStart(2, "0");
}

document.addEventListener("DOMContentLoaded", initStatCount);

        // aria-pressed carries the state, so screen readers hear which is selected
        bar.querySelectorAll(".chip").forEach(c => {
            const on = c === chip;
            c.classList.toggle("active", on);
            c.setAttribute("aria-pressed", String(on));
        });

        const filter = chip.dataset.filter;
        let shown = 0;

        items.forEach(item => {
            const match = filter === "all" || item.dataset.category === filter;
            item.hidden = !match;
            if (match) shown++;

            // close anything being hidden, so it doesn't reappear open later
            if (!match) {
                const panel = item.querySelector(".accordion-collapse");
                if (panel) bootstrap.Collapse.getInstance(panel)?.hide();
            }
        });

        if (empty) empty.hidden = shown !== 0;

document.addEventListener("DOMContentLoaded", initPerkFilter);