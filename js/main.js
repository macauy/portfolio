// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
  body.classList.add("dark-mode");
  updateToggleIcon(true);
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  updateToggleIcon(isDarkMode);
});

function updateToggleIcon(isDarkMode) {
  const icon = themeToggle.querySelector("i");
  icon.className = isDarkMode ? "fas fa-moon" : "fas fa-sun";
}

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling offset (header)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#" || !targetId) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const headerOffset = 86;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  });
});

// Reveal on view (project cards)
const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(18px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});
