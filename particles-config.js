const particlesConfig = {
  particles: {
    number: {
      value: 30,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false },
      resize: true,
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.6 } },
    },
  },
  retina_detect: true,
};

export default particlesConfig;
