// Footer Year

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  mainNav.classList.toggle("active");

  // Small animation (fade + slide)
  mainNav.style.transition = "all 0.3s ease";
});


// Close menu when clicking a link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active");
    mainNav.classList.remove("active");
  });
});


// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Toggle theme with fade effect
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.add("theme-transition");

  let newTheme =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "dark"
      : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Remove transition after animation
  setTimeout(() => {
    document.documentElement.classList.remove("theme-transition");
  }, 300);
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");

  // Smooth alert animation in the future
  alert(`Thank you for your message, ${name}! I’ll get back to you soon.`);

  contactForm.reset();
});
