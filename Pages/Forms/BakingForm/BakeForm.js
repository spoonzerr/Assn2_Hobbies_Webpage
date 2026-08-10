/* ============================================================
   BAKING FORM — VALIDATION, COUNTRY COMBOBOX & SUBMISSION
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    if (!form) return;

    /* ---------- Country data (name, ISO2 for flag, dial code) ---------- */
    const COUNTRIES = [
        { name: "Afghanistan", iso2: "af", code: "93" },
        { name: "Albania", iso2: "al", code: "355" },
        { name: "Algeria", iso2: "dz", code: "213" },
        { name: "Andorra", iso2: "ad", code: "376" },
        { name: "Angola", iso2: "ao", code: "244" },
        { name: "Argentina", iso2: "ar", code: "54" },
        { name: "Armenia", iso2: "am", code: "374" },
        { name: "Australia", iso2: "au", code: "61" },
        { name: "Austria", iso2: "at", code: "43" },
        { name: "Azerbaijan", iso2: "az", code: "994" },
        { name: "Bahamas", iso2: "bs", code: "1" },
        { name: "Bahrain", iso2: "bh", code: "973" },
        { name: "Bangladesh", iso2: "bd", code: "880" },
        { name: "Barbados", iso2: "bb", code: "1" },
        { name: "Belarus", iso2: "by", code: "375" },
        { name: "Belgium", iso2: "be", code: "32" },
        { name: "Belize", iso2: "bz", code: "501" },
        { name: "Benin", iso2: "bj", code: "229" },
        { name: "Bhutan", iso2: "bt", code: "975" },
        { name: "Bolivia", iso2: "bo", code: "591" },
        { name: "Bosnia and Herzegovina", iso2: "ba", code: "387" },
        { name: "Botswana", iso2: "bw", code: "267" },
        { name: "Brazil", iso2: "br", code: "55" },
        { name: "Brunei", iso2: "bn", code: "673" },
        { name: "Bulgaria", iso2: "bg", code: "359" },
        { name: "Burkina Faso", iso2: "bf", code: "226" },
        { name: "Burundi", iso2: "bi", code: "257" },
        { name: "Cambodia", iso2: "kh", code: "855" },
        { name: "Cameroon", iso2: "cm", code: "237" },
        { name: "Canada", iso2: "ca", code: "1" },
        { name: "Cape Verde", iso2: "cv", code: "238" },
        { name: "Central African Republic", iso2: "cf", code: "236" },
        { name: "Chad", iso2: "td", code: "235" },
        { name: "Chile", iso2: "cl", code: "56" },
        { name: "China", iso2: "cn", code: "86" },
        { name: "Colombia", iso2: "co", code: "57" },
        { name: "Comoros", iso2: "km", code: "269" },
        { name: "Congo", iso2: "cg", code: "242" },
        { name: "Congo (DRC)", iso2: "cd", code: "243" },
        { name: "Costa Rica", iso2: "cr", code: "506" },
        { name: "Croatia", iso2: "hr", code: "385" },
        { name: "Cuba", iso2: "cu", code: "53" },
        { name: "Cyprus", iso2: "cy", code: "357" },
        { name: "Czech Republic", iso2: "cz", code: "420" },
        { name: "Denmark", iso2: "dk", code: "45" },
        { name: "Djibouti", iso2: "dj", code: "253" },
        { name: "Dominican Republic", iso2: "do", code: "1" },
        { name: "Ecuador", iso2: "ec", code: "593" },
        { name: "Egypt", iso2: "eg", code: "20" },
        { name: "El Salvador", iso2: "sv", code: "503" },
        { name: "Estonia", iso2: "ee", code: "372" },
        { name: "Eswatini", iso2: "sz", code: "268" },
        { name: "Ethiopia", iso2: "et", code: "251" },
        { name: "Fiji", iso2: "fj", code: "679" },
        { name: "Finland", iso2: "fi", code: "358" },
        { name: "France", iso2: "fr", code: "33" },
        { name: "Gabon", iso2: "ga", code: "241" },
        { name: "Gambia", iso2: "gm", code: "220" },
        { name: "Georgia", iso2: "ge", code: "995" },
        { name: "Germany", iso2: "de", code: "49" },
        { name: "Ghana", iso2: "gh", code: "233" },
        { name: "Greece", iso2: "gr", code: "30" },
        { name: "Guatemala", iso2: "gt", code: "502" },
        { name: "Guinea", iso2: "gn", code: "224" },
        { name: "Guyana", iso2: "gy", code: "592" },
        { name: "Haiti", iso2: "ht", code: "509" },
        { name: "Honduras", iso2: "hn", code: "504" },
        { name: "Hong Kong", iso2: "hk", code: "852" },
        { name: "Hungary", iso2: "hu", code: "36" },
        { name: "Iceland", iso2: "is", code: "354" },
        { name: "India", iso2: "in", code: "91" },
        { name: "Indonesia", iso2: "id", code: "62" },
        { name: "Iran", iso2: "ir", code: "98" },
        { name: "Iraq", iso2: "iq", code: "964" },
        { name: "Ireland", iso2: "ie", code: "353" },
        { name: "Israel", iso2: "il", code: "972" },
        { name: "Italy", iso2: "it", code: "39" },
        { name: "Jamaica", iso2: "jm", code: "1" },
        { name: "Japan", iso2: "jp", code: "81" },
        { name: "Jordan", iso2: "jo", code: "962" },
        { name: "Kazakhstan", iso2: "kz", code: "7" },
        { name: "Kenya", iso2: "ke", code: "254" },
        { name: "Kuwait", iso2: "kw", code: "965" },
        { name: "Kyrgyzstan", iso2: "kg", code: "996" },
        { name: "Laos", iso2: "la", code: "856" },
        { name: "Latvia", iso2: "lv", code: "371" },
        { name: "Lebanon", iso2: "lb", code: "961" },
        { name: "Lesotho", iso2: "ls", code: "266" },
        { name: "Liberia", iso2: "lr", code: "231" },
        { name: "Libya", iso2: "ly", code: "218" },
        { name: "Liechtenstein", iso2: "li", code: "423" },
        { name: "Lithuania", iso2: "lt", code: "370" },
        { name: "Luxembourg", iso2: "lu", code: "352" },
        { name: "Macao", iso2: "mo", code: "853" },
        { name: "Madagascar", iso2: "mg", code: "261" },
        { name: "Malawi", iso2: "mw", code: "265" },
        { name: "Malaysia", iso2: "my", code: "60" },
        { name: "Maldives", iso2: "mv", code: "960" },
        { name: "Mali", iso2: "ml", code: "223" },
        { name: "Malta", iso2: "mt", code: "356" },
        { name: "Mauritania", iso2: "mr", code: "222" },
        { name: "Mauritius", iso2: "mu", code: "230" },
        { name: "Mexico", iso2: "mx", code: "52" },
        { name: "Moldova", iso2: "md", code: "373" },
        { name: "Monaco", iso2: "mc", code: "377" },
        { name: "Mongolia", iso2: "mn", code: "976" },
        { name: "Montenegro", iso2: "me", code: "382" },
        { name: "Morocco", iso2: "ma", code: "212" },
        { name: "Mozambique", iso2: "mz", code: "258" },
        { name: "Myanmar", iso2: "mm", code: "95" },
        { name: "Namibia", iso2: "na", code: "264" },
        { name: "Nepal", iso2: "np", code: "977" },
        { name: "Netherlands", iso2: "nl", code: "31" },
        { name: "New Zealand", iso2: "nz", code: "64" },
        { name: "Nicaragua", iso2: "ni", code: "505" },
        { name: "Niger", iso2: "ne", code: "227" },
        { name: "Nigeria", iso2: "ng", code: "234" },
        { name: "North Korea", iso2: "kp", code: "850" },
        { name: "North Macedonia", iso2: "mk", code: "389" },
        { name: "Norway", iso2: "no", code: "47" },
        { name: "Oman", iso2: "om", code: "968" },
        { name: "Pakistan", iso2: "pk", code: "92" },
        { name: "Palestine", iso2: "ps", code: "970" },
        { name: "Panama", iso2: "pa", code: "507" },
        { name: "Papua New Guinea", iso2: "pg", code: "675" },
        { name: "Paraguay", iso2: "py", code: "595" },
        { name: "Peru", iso2: "pe", code: "51" },
        { name: "Philippines", iso2: "ph", code: "63" },
        { name: "Poland", iso2: "pl", code: "48" },
        { name: "Portugal", iso2: "pt", code: "351" },
        { name: "Puerto Rico", iso2: "pr", code: "1" },
        { name: "Qatar", iso2: "qa", code: "974" },
        { name: "Romania", iso2: "ro", code: "40" },
        { name: "Russia", iso2: "ru", code: "7" },
        { name: "Rwanda", iso2: "rw", code: "250" },
        { name: "Saudi Arabia", iso2: "sa", code: "966" },
        { name: "Senegal", iso2: "sn", code: "221" },
        { name: "Serbia", iso2: "rs", code: "381" },
        { name: "Seychelles", iso2: "sc", code: "248" },
        { name: "Sierra Leone", iso2: "sl", code: "232" },
        { name: "Singapore", iso2: "sg", code: "65" },
        { name: "Slovakia", iso2: "sk", code: "421" },
        { name: "Slovenia", iso2: "si", code: "386" },
        { name: "Somalia", iso2: "so", code: "252" },
        { name: "South Africa", iso2: "za", code: "27" },
        { name: "South Korea", iso2: "kr", code: "82" },
        { name: "South Sudan", iso2: "ss", code: "211" },
        { name: "Spain", iso2: "es", code: "34" },
        { name: "Sri Lanka", iso2: "lk", code: "94" },
        { name: "Sudan", iso2: "sd", code: "249" },
        { name: "Suriname", iso2: "sr", code: "597" },
        { name: "Sweden", iso2: "se", code: "46" },
        { name: "Switzerland", iso2: "ch", code: "41" },
        { name: "Syria", iso2: "sy", code: "963" },
        { name: "Taiwan", iso2: "tw", code: "886" },
        { name: "Tajikistan", iso2: "tj", code: "992" },
        { name: "Tanzania", iso2: "tz", code: "255" },
        { name: "Thailand", iso2: "th", code: "66" },
        { name: "Togo", iso2: "tg", code: "228" },
        { name: "Trinidad and Tobago", iso2: "tt", code: "1" },
        { name: "Tunisia", iso2: "tn", code: "216" },
        { name: "Turkey", iso2: "tr", code: "90" },
        { name: "Turkmenistan", iso2: "tm", code: "993" },
        { name: "Uganda", iso2: "ug", code: "256" },
        { name: "Ukraine", iso2: "ua", code: "380" },
        { name: "United Arab Emirates", iso2: "ae", code: "971" },
        { name: "United Kingdom", iso2: "gb", code: "44" },
        { name: "United States", iso2: "us", code: "1" },
        { name: "Uruguay", iso2: "uy", code: "598" },
        { name: "Uzbekistan", iso2: "uz", code: "998" },
        { name: "Vanuatu", iso2: "vu", code: "678" },
        { name: "Venezuela", iso2: "ve", code: "58" },
        { name: "Vietnam", iso2: "vn", code: "84" },
        { name: "Yemen", iso2: "ye", code: "967" },
        { name: "Zambia", iso2: "zm", code: "260" },
        { name: "Zimbabwe", iso2: "zw", code: "263" }
    ];

    const flag = (iso2) =>
        String.fromCodePoint(...[...iso2.toUpperCase()].map(c => 127397 + c.charCodeAt(0)));

    /* ---------- Country combobox ---------- */
    const countryInput = document.getElementById("countryInput");
    const countryCode = document.getElementById("countryCode");
    const countryList = document.getElementById("countryList");
    const phoneGroup = document.getElementById("phoneGroup");
    const phoneFeedback = document.getElementById("phoneFeedback");

    let activeIndex = -1;
    let visible = [];

    function renderList(items) {
        countryList.innerHTML = "";
        items.forEach((c, i) => {
            const li = document.createElement("li");
            li.className = "country-option" + (i === activeIndex ? " active" : "");
            li.setAttribute("role", "option");
            li.innerHTML = `<span class="flag">${flag(c.iso2)}</span><span class="name">${c.name}</span><span class="code">+${c.code}</span>`;
            li.addEventListener("mousedown", (e) => {
                e.preventDefault();
                selectCountry(c);
            });
            countryList.appendChild(li);
        });
    }

    function openList(items) {
        visible = items;
        activeIndex = -1;
        renderList(items);
        countryList.classList.toggle("d-none", items.length === 0);
        countryInput.setAttribute("aria-expanded", items.length > 0 ? "true" : "false");
    }

    function closeList() {
        countryList.classList.add("d-none");
        countryInput.setAttribute("aria-expanded", "false");
    }

    function selectCountry(c) {
        countryInput.value = `${flag(c.iso2)} ${c.name} (+${c.code})`;
        countryCode.value = c.code;
        closeList();
        phoneGroup.classList.remove("is-invalid");
        phoneFeedback.classList.add("d-none");
        document.getElementById("phone").focus();
    }

    countryInput.addEventListener("focus", () => {
        countryInput.select();
        openList(COUNTRIES);
    });

    countryInput.addEventListener("input", () => {
        countryCode.value = "";
        const q = countryInput.value.trim().toLowerCase();
        const filtered = q
            ? COUNTRIES.filter(c =>
                c.name.toLowerCase().includes(q) || c.code.includes(q.replace(/^\+/, "")))
            : COUNTRIES;
        openList(filtered);
    });

    countryInput.addEventListener("keydown", (e) => {
        if (countryList.classList.contains("d-none") && e.key !== "Escape") return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            activeIndex = Math.min(activeIndex + 1, visible.length - 1);
            renderList(visible);
            countryList.children[activeIndex]?.scrollIntoView({ block: "nearest" });
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            activeIndex = Math.max(activeIndex - 1, 0);
            renderList(visible);
            countryList.children[activeIndex]?.scrollIntoView({ block: "nearest" });
        } else if (e.key === "Enter") {
            if (activeIndex >= 0 && visible[activeIndex]) {
                e.preventDefault();
                selectCountry(visible[activeIndex]);
            }
        } else if (e.key === "Escape") {
            closeList();
        }
    });

    document.addEventListener("click", (e) => {
        if (!phoneGroup.contains(e.target)) closeList();
    });


    /* ---------- Category chips: clear the invalid state as soon as one is checked ---------- */
    const categoryChips = document.getElementById("categoryChips");
    const categoryFeedback = document.getElementById("categoryFeedback");
    const categoryInputs = categoryChips.querySelectorAll("input[name='categories']");

    categoryInputs.forEach((input) => {
        input.addEventListener("change", () => {
            if ([...categoryInputs].some((c) => c.checked)) {
                categoryChips.classList.remove("is-invalid");
                categoryFeedback.classList.add("d-none");
            }
        });
    });


    /* ---------- Form validation ---------- */
    /* Fields carry real name attributes and the form submits via GET,
       so a valid submit is left alone — the browser navigates to
       response.html with everything in the query string. We only ever
       preventDefault to block an invalid submission and show the
       validation state. */
    form.addEventListener("submit", (event) => {
        const phoneValid = countryCode.value !== "" && document.getElementById("phone").checkValidity();
        phoneGroup.classList.toggle("is-invalid", !phoneValid);
        phoneFeedback.classList.toggle("d-none", phoneValid);

        const categoriesValid = [...categoryInputs].some((c) => c.checked);
        categoryChips.classList.toggle("is-invalid", !categoriesValid);
        categoryFeedback.classList.toggle("d-none", categoriesValid);

        if (!form.checkValidity() || !phoneValid || !categoriesValid) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
        }
    });
});