// Year
document.getElementById("year").innerText = new Date().getFullYear();

// Dark mode
const body = document.body;
const toggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  icon.className = isDarkMode ? "fas fa-moon" : "fas fa-sun";
});
