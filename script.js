import particlesConfig from "./particles-config.js";

document.addEventListener("DOMContentLoaded", () => {
  particlesJS("hero", particlesConfig);

  new Typed("#typed-text", {
    strings: ["Front-End Developer", "UI/UX Enthusiast", "Cybersecurity Explorer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  const toggleBtn = document.querySelector(".theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});

  