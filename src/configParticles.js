export const confParticles = {
  background: {
    color: {
      value: "000",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 250,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#47af4d",
    },
    links: {
      color: "#fff",
      distance: 200,
      enable: true,
      opacity: 0.2,
      width: 2,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      random: true,
      speed: 3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1200,
      },
      value: 60,
    },
    opacity: {
      value: 0.2,
    },

    size: {
      value: { min: 1, max: 4 },
    },
  },
  detectRetina: true,
};
