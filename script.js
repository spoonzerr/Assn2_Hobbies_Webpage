/* =========================================================
   Hobbyssey — vanilla JS (no frameworks)
   Handles: homepage scroll-reveal + intro video, entry-form
   validation, and rendering the submission on the response page.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initScrollReveal();
  initIntroVideo();
  initFormValidation();
  renderResponse();
});

/* ---------- 0a. Scroll reveal for hobby media (index.html) ---------- */
function initScrollReveal() {
  var targets = document.querySelectorAll("[data-reveal]");
  if (!targets.length) return;

  // No IntersectionObserver support (or reduced motion) → just show everything
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // reveal once, then stop watching
      }
    });
  }, { threshold: 0.25 });

  targets.forEach(function (el) { observer.observe(el); });
}

/* ---------- 0b. Intro video play overlay (index.html) ---------- */
function initIntroVideo() {
  var video = document.getElementById("introVideo");
  var overlay = document.getElementById("playOverlay");
  if (!video || !overlay) return;

  overlay.addEventListener("click", function () {
    video.setAttribute("controls", "true");
    video.play();
    overlay.classList.add("is-hidden");
  });

  video.addEventListener("pause", function () {
    overlay.classList.remove("is-hidden");
  });
}


/* ---------- 1. Form validation (form.html) ---------- */
function initFormValidation() {
  var form = document.getElementById("joinForm");
  if (!form) return;

  var dayGroup = document.getElementById("dayGroup");
  var dayChecks = form.querySelectorAll(".day-check");

  form.addEventListener("submit", function (event) {
    var atLeastOneSlot = Array.prototype.some.call(dayChecks, function (cb) {
      return cb.checked;
    });

    if (!atLeastOneSlot) {
      dayGroup.classList.add("needs-day");
    } else {
      dayGroup.classList.remove("needs-day");
    }

    if (!form.checkValidity() || !atLeastOneSlot) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  }, false);

  // Clear the "pick a slot" warning as soon as one is checked
  dayChecks.forEach(function (cb) {
    cb.addEventListener("change", function () {
      var anyChecked = Array.prototype.some.call(dayChecks, function (c) { return c.checked; });
      if (anyChecked) dayGroup.classList.remove("needs-day");
    });
  });
}

/* ---------- 2. Response page rendering (response.html) ---------- */
function renderResponse() {
  var summaryCard = document.getElementById("summaryCard");
  if (!summaryCard) return; // not on the response page

  var params = new URLSearchParams(window.location.search);
  var noDataCard = document.getElementById("noDataCard");
  var heading = document.getElementById("responseHeading");
  var sub = document.getElementById("responseSub");

  if (!params.has("name") && !params.has("email")) {
    summaryCard.hidden = true;
    noDataCard.hidden = false;
    return;
  }

  var name = params.get("name") || "\u2014";
  var email = params.get("email") || "\u2014";
  var discord = params.get("discord") || "\u2014";
  var game = params.get("game") || "\u2014";
  var rank = params.get("rank") || "Unranked / not specified";
  var team = params.get("team") || "\u2014";
  var availability = params.getAll("availability");
  var message = params.get("message") || "None";

  document.getElementById("outName").textContent = name;
  document.getElementById("outEmail").textContent = email;
  document.getElementById("outDiscord").textContent = discord;
  document.getElementById("outGame").textContent = game;
  document.getElementById("outRank").textContent = rank;
  document.getElementById("outTeam").textContent = team;
  document.getElementById("outAvailability").textContent = availability.length ? availability.join(", ") : "\u2014";
  document.getElementById("outMessage").textContent = message;

  if (heading) heading.textContent = "You're entered, " + name.split(" ")[0] + "!";
  if (sub) sub.textContent = "We'll DM " + discord + " on Discord with the bracket details.";

  summaryCard.hidden = false;
  noDataCard.hidden = true;
}
