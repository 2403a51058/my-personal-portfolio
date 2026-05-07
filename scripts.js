const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("is-open");
    }
  });
}

const progressBars = document.querySelectorAll("[data-progress]");
progressBars.forEach((bar) => {
  const value = Number(bar.getAttribute("data-progress"));
  const boundedValue = Math.min(Math.max(value, 0), 100);
  const fill = document.createElement("span");
  fill.className = "progress-fill";
  fill.style.width = `${boundedValue}%`;
  bar.appendChild(fill);
  const percentLabel = bar.parentElement?.querySelector(".progress-percent");
  if (percentLabel) {
    percentLabel.textContent = `${boundedValue}%`;
  }
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.remove("is-clicked");
    void btn.offsetWidth;
    btn.classList.add("is-clicked");
  });
});

function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("cf-name")?.value || "";
  const email = document.getElementById("cf-email")?.value || "";
  const subject = document.getElementById("cf-subject")?.value || "Message from portfolio";
  const message = document.getElementById("cf-message")?.value || "";
  const body = `From: ${name} <${email}>\n\n${message}`;
  const mailto = `mailto:lavishettyharshith@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  return false;
}

// Enhanced touch support for floating animations on mobile
const floatingElements = document.querySelectorAll(
  ".stat-card, .skill-card, .pill, .timeline-card, .project-card, .opp-card, .info-card, .media-card, .social-btn, .chip"
);

floatingElements.forEach((element) => {
  let touchStartY = 0;
  let touchEndY = 0;

  element.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
    element.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    element.style.transform = "translateY(-8px)";
    element.style.boxShadow = "0 32px 64px rgba(15, 65, 115, 0.2)";
  });

  element.addEventListener("touchend", () => {
    element.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    element.style.transform = "";
    element.style.boxShadow = "";
  });

  element.addEventListener("touchcancel", () => {
    element.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    element.style.transform = "";
    element.style.boxShadow = "";
  });
});

