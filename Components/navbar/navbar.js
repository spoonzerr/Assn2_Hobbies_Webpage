async function loadNavbar() {
    const mount = document.getElementById("navbar");
    if (!mount) return;

    try {
        const res = await fetch("/Components/navbar/navbar.html");
        if (!res.ok) throw new Error(res.status);
        mount.innerHTML = await res.text();

        // highlight the link for the current page
        const here = window.location.pathname;
        const link = mount.querySelector(`a[href="${here}"]`);
        if (link) link.classList.add("active");
    } catch (err) {
        console.error("Navbar failed to load:", err);
    }
}

document.addEventListener("DOMContentLoaded", loadNavbar);