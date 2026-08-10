/* =========================================================
   response.js
   form submit with method="GET", so answer arrives in URL.
   This reads it back and displays them,
   all forms share this page.
   ========================================================= */

/* Readable labels. to make things more tidy */
const LABELS = {
    firstName: "First name",
    lastName: "Last name",
    countryCode: "Country code",
    phone: "Phone number",
    email: "Email address",
    gender: "Gender",
    ageGroup: "Age group",
    mainGame: "Main game",
    discord: "Discord username",
    guitarType: "Guitar type",
    guitarSkill: "Skill level",
    availability: "Usually free",
    notes: "Notes"
};

/* post-form steps, by the hidden formType field each
   form submits. Anything not listed here just means no
   "next steps" card is shown. */
const NEXT_STEPS = {
    "Gaming sign-up": [
        "We'll add you to the group so you can see when sessions are on.",
        "Someone will get in touch on Discord within a few days.",
        "Turn up to whichever session suits you. No commitment either way."
    ],
    "Guitar sign-up": [
        "We'll match you with others around your skill level.",
        "Someone will reach out to sort out a time that works.",
        "Bring your own guitar if you have one — spares are available if not."
    ]
};

function prettify(name) {
    if (LABELS[name]) return LABELS[name];

    // String.prototype.replace() with a regex 
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    // This turns "someFieldName" into "some Field Name" by inserting space before every leter
    const spaced = name.replace(/([A-Z])/g, " $1").toLowerCase().trim();
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function renderResponse() {
    const summary = document.getElementById("summary");
    if (!summary) return;

    // URLSearchParams — a built-in browser API for reading/parsing the
    // query string to read form answers back with no server.
    // Docs: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    const params = new URLSearchParams(window.location.search);

    const heading = document.getElementById("heading");
    const lede = document.getElementById("lede");
    const kicker = document.getElementById("kicker");

    /* ---------- nothing submitted ---------- */
    // params.keys() returns an iterator; spreading it into an array
    // [...] let us check .length. Iterators/spread syntax are
    // both plain JavaScript language features, not a library.
    if ([...params.keys()].length === 0) {
        heading.textContent = "Nothing to show";
        kicker.textContent = "Confirmation";
        lede.hidden = true;
        document.getElementById("backToForm").href = "/Pages/homePage/home.html";
        return;
    }

    const formType = params.get("formType") || "";
    const first = params.get("firstName");

    /* ---------- build the summary rows ---------- */
    const seen = new Set();   // built-in JS Set — tracks field names already shown

    // URLSearchParams.forEach() iterates every key/value pair in the
    // query string. Docs: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/forEach
    params.forEach(function (value, key) {
        if (key === "formType" || seen.has(key)) return;
        seen.add(key);

        // getAll() groups repeated names that's how checkboxes arrive
        // (e.g. availability=Weekday&availability=Weekend)
        const all = params.getAll(key).filter(v => v.trim() !== "");
        if (!all.length) return;

        // document.createElement() --- builds new HTML elements direct
        // in JS, rather than writing HTML strings
        // Docs: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        const row = document.createElement("div");
        row.className = "summary-row";

        const dt = document.createElement("dt");
        dt.textContent = prettify(key);

        const dd = document.createElement("dd");
        // textContent, not innerHTML --- anything typed in is treated as
        // plain text, not as HTML; stops someone typing
        // a <script> tag into a form field and having it run.
        dd.textContent = all.join(", ");

        row.append(dt, dd);   // Element.append() adds child nodes
        summary.append(row);
    });

    document.getElementById("summaryCard").hidden = false;

    /* ---------- personalise the wording ---------- */
    if (formType === "Site feedback") {
        kicker.textContent = "Feedback received";
        heading.textContent = first ? "Thanks, " + first + "!" : "Thanks for the feedback!";
        lede.textContent = "We read every one of these. Here's what you sent us.";
    } else {
        const hobby = formType.replace(" sign-up", "").toLowerCase();
        kicker.textContent = "You're in";
        heading.textContent = first ? "Welcome aboard, " + first + "!" : "Welcome aboard!";
        lede.textContent = hobby
            ? "Your " + hobby + " sign-up is in. Here's what we received."
            : "Your sign-up is in. Here's what we received.";

        /* ---------- next steps, only for sign-up forms ---------- */
        const steps = NEXT_STEPS[formType];
        if (steps) {
            const list = document.getElementById("nextSteps");
            steps.forEach(function (text) {
                const li = document.createElement("li");
                li.textContent = text;
                list.append(li);
            });
            document.getElementById("nextCard").hidden = false;
        }
    }
}

// DOMContentLoaded fires once the HTML is fully parsed, so this
// script doesn't try to grab elements before they exist.
// Docs: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", renderResponse);