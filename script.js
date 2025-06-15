import particlesConfig from "./particles-config.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize particles.js on the background container
  particlesJS("particles-js", particlesConfig);

  // Initialize Typed.js animation
  new Typed("#typed-text", {
    strings: ["Front-End Developer", "UI/UX Enthusiast", "Cybersecurity Explorer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // Theme toggle functionality
  const toggleBtn = document.querySelector(".theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
});
