import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "#0F172A", // Using new background.DEFAULT color
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2
              }
            },
          },
        },
        particles: {
          color: {
            value: "#3B82F6", // Blue-500
          },
          links: {
            color: "#60A5FA", // Blue-400
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
