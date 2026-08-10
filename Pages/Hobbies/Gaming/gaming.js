// for the casual / competitive table selector: more organised
// and simple for users to navigate

function initTableFilter() {
    const buttons = document.querySelectorAll("[data-filter]");
    const table = document.getElementById("startTable");
    if (!buttons.length || !table) return;

    const groups = table.querySelectorAll("tbody");

    buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            groups.forEach(function (tbody) {
                const match = filter === "all" || tbody.dataset.category === filter;
                tbody.hidden = !match;
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", initTableFilter);