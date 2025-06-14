document.addEventListener("DOMContentLoaded", function () {
    // VANTA.NET background effect
    VANTA.NET({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xffffff,
  backgroundColor: 0x0d0d0d,
  points: 8.0,
  maxDistance: 20.0,
  spacing: 25.0
});
  
    // Typewriter animation
    new Typed("#typed-text", {
      strings: ["Front-End Developer", "UI/UX Enthusiast", "Cybersecurity Explorer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.theme-toggle');
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  });
  
  