/* =========================================================
   form.js — shared by every form
   Uses Bootstrap's documented validation pattern: the form
   carries .needs-validation + novalidate, and we add
   .was-validated on submit so Bootstrap reveals its own
   valid/invalid styling.
   ========================================================= */

function initFormValidation() {
    const forms = document.querySelectorAll(".needs-validation");
    if (!forms.length) return;

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {
            markGroups(form);

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();

                // send the user to the first problem rather than making them hunt
                const firstBad = form.querySelector(":invalid");
                if (firstBad) {
                    firstBad.focus();
                    firstBad.scrollIntoView({ block: "center", behavior: "smooth" });
                }
            }

            form.classList.add("was-validated");
        });

        // once errors are showing, update them live as the user fixes things
        form.addEventListener("change", function () {
            if (form.classList.contains("was-validated")) markGroups(form);
        });  
    });
}

/* Bootstrap can style an invalid <input>, but a radio group's message sits
   outside the input it belongs to. This flags the wrapper instead, so the
   shared .group-feedback line can be shown by CSS. */
function markGroups(form) {
    form.querySelectorAll(".choice-row").forEach(function (row) {
        const inputs = row.querySelectorAll("input[required]");
        if (!inputs.length) return;

        const name = inputs[0].name;
        const chosen = form.querySelector('input[name="' + name + '"]:checked');
        const wrapper = row.parentElement;

        wrapper.classList.toggle("group-invalid", !chosen);
    });
}

document.addEventListener("DOMContentLoaded", initFormValidation);