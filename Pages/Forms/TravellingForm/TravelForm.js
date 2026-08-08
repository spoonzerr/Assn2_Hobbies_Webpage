/* ============================================================
   TRAVELLING FORM VALIDATION & SUBMISSION HANDLER
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        // Prevent default browser form submission refresh
        event.preventDefault();
        event.stopPropagation();

        // Check HTML5 validity constraints
        if (form.checkValidity()) {
            alert("Your request has been received! You will be added to the group chat shortly.");
            form.reset();
            form.classList.remove("was-validated");
        } else {
            // Apply Bootstrap's validation styling
            form.classList.add("was-validated");
        }
    });
});