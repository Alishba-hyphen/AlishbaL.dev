import particlesConfig from "./particles-config.js";

document.addEventListener("DOMContentLoaded", () => {
  // Attach particles to the correct container
  particlesJS("particles-js", particlesConfig);

  // Typed animation
  new Typed("#typed-text", {
    strings: ["Front-End Developer", "UI/UX Enthusiast", "Cybersecurity Explorer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  // Theme toggle
  const toggleBtn = document.querySelector(".theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
