/* =========================================================
   response.js
   Forms submit with method="GET", so every answer arrives in
   the URL. This reads them back and displays them, which is
   why the whole thing works without a server.
   Written generically, so all three forms share this page.
   ========================================================= */

/* Readable labels. Anything not listed still shows — it just
   falls back to a tidied version of its own field name. */
const LABELS = {
    firstName:    "First name",
    lastName:     "Last name",
    countryCode:  "Country code",
    phone:        "Phone number",
    email:        "Email address",
    gender:       "Gender",
    ageGroup:     "Age group",
    mainGame:     "Main game",
    discord:      "Discord username",
    availability: "Usually free",
    notes:        "Notes",
    experience:   "Experience",
    guitarType:   "Plays on",
    goals:        "Wants to improve",
    song:         "Song to learn",
    ease:         "Ease of navigation",
    favourite:    "Most interesting hobby",
    liked:        "What worked well",
    comments:     "Feedback",
    suggestHobby: "Hobby suggested",
    followUp:     "Happy to be contacted"
};

/* Where "Edit my answers" should send them back to */
const RETURN_TO = {
    "Gaming sign-up": "/Pages/Forms/GamingForm/GameForm.html",
    "Guitar sign-up": "/Pages/Forms/GuitarForm/GuitarForm.html",
    "Site feedback":  "/Pages/Forms/FeedbackForm/FeedbackForm.html"
};

function prettify(name) {
    if (LABELS[name]) return LABELS[name];
    const spaced = name.replace(/([A-Z])/g, " $1").toLowerCase().trim();
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function renderResponse() {
    const summary = document.getElementById("summary");
    if (!summary) return;

    const params = new URLSearchParams(window.location.search);
    const heading = document.getElementById("heading");
    const lede = document.getElementById("lede");
    const kicker = document.getElementById("kicker");

    /* ---------- nothing submitted ---------- */
    if ([...params.keys()].length === 0) {
        document.getElementById("noData").hidden = false;
        heading.textContent = "Nothing to show";
        kicker.textContent = "Confirmation";
        lede.hidden = true;
        document.getElementById("backToForm").href = "/Pages/homePage/home.html";
        return;
    }

    const formType = params.get("formType") || "";
    const first = params.get("firstName");

    /* ---------- build the summary rows ---------- */
    const seen = new Set();

    params.forEach(function (value, key) {
        if (key === "formType" || seen.has(key)) return;
        seen.add(key);

        // getAll groups repeated names — that's how checkboxes arrive
        const all = params.getAll(key).filter(v => v.trim() !== "");
        if (!all.length) return;

        const row = document.createElement("div");
        row.className = "summary-row";

        const dt = document.createElement("dt");
        dt.textContent = prettify(key);

        const dd = document.createElement("dd");
        // textContent, not innerHTML — anything typed in is treated as text
        dd.textContent = all.join(", ");

        row.append(dt, dd);
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
        document.getElementById("nextCard").hidden = false;
    }

    /* ---------- point the edit button at the right form ---------- */
    document.getElementById("backToForm").href =
        RETURN_TO[formType] || "/Pages/homePage/home.html";
}

document.addEventListener("DOMContentLoaded", renderResponse);