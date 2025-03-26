particlesJS("particles-js", {
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.12,
        random: false
      },
      size: {
        value: 2.5,
        random: true
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false }
      },
      modes: {
        repulse: { distance: 100 }
      }
    },
    retina_detect: true
  });
  