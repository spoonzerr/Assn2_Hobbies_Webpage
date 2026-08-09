/* =========================================================
   navbar.js
   Fetches the shared navbar, injects it, marks the current
   page, and wires up the mobile hamburger.
   ========================================================= */

async function loadNavbar() {
    const mount = document.getElementById("navbar");
    if (!mount) return;

    try {
        const res = await fetch("/Components/navbar/navbar.html");
        if (!res.ok) throw new Error("HTTP " + res.status);
        mount.innerHTML = await res.text();
    } catch (err) {
        console.error("Navbar failed to load:", err);
        return;                     // nothing below works without the markup
    }

    // These elements only exist after the fetch above, so this can't
    // live in its own DOMContentLoaded listener.
    markCurrentPage(mount);
    initNavToggle(mount);
}

/* ---------- highlight the link for the page we're on ---------- */
function markCurrentPage(mount) {
    const here = window.location.pathname;

    // :not(#main) skips the wordmark, which also points at home.html
    const link = mount.querySelector(`a[href="${here}"]:not(#wordmark)`);
    if (!link) return;

    link.classList.add("active");
    link.setAttribute("aria-current", "page");

    // if it's a dropdown item, light up its "Hobbies" / "Forms" parent too
    const parent = link.closest(".dropdown");
    if (parent) {
        const toggle = parent.querySelector(":scope > a");
        if (toggle) toggle.classList.add("active");
    }
}

/* ---------- hamburger ---------- */
function initNavToggle(mount) {
    const toggle = mount.querySelector(".nav-toggle");
    const menu = mount.querySelector("#navMenu");
    if (!toggle || !menu) return;

    function setOpen(open) {
        // aria-expanded IS the state — CSS and screen readers read the same value
        toggle.setAttribute("aria-expanded", String(open));
        menu.classList.toggle("open", open);
    }

    toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // tapping a real link closes the menu; the "#" dropdown parents don't
    menu.addEventListener("click", function (event) {
        const a = event.target.closest("a");
        if (a && a.getAttribute("href") !== "#") setOpen(false);
    });

    // Escape closes it and returns focus to the button
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
            setOpen(false);
            toggle.focus();
        }
    });

    // widening back to desktop clears the mobile state
    window.addEventListener("resize", function () {
        if (window.innerWidth > 900) setOpen(false);
    });
}

document.addEventListener("DOMContentLoaded", loadNavbar);