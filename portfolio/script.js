// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  

  const lightLogos = {
    linkedin: "assets/linkedin_light.png",
    theme: "assets/theme_light.png",
  };

  const darkLogos = {
    linkedin: "assets/linkedin_dark.png",
    theme: "assets/theme_dark.png",
  };

  function setTheme(isDark) {
    linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
    themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("isDark", isDark);

    setTheme(isDark);
  });

  const loadTheme = () => {
    const isDark = localStorage.getItem("isDark") === "true";
    document.body.classList.toggle("dark-theme", isDark);

    setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});