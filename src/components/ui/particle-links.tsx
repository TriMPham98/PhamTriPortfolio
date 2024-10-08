"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import type { ISourceOptions, Engine } from "@tsparticles/engine";

interface ParticleLinksProps {
  className?: string;
}

const ParticleLinks: React.FC<ParticleLinksProps> = ({ className }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    preset: "links",
    background: {
      color: "transparent",
    },
    particles: {
      number: {
        value: 369,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ffffff",
      },
      links: {
        enable: true,
        color: "#ffffff",
        opacity: 0.15,
      },
      move: {
        enable: true,
        speed: 0.69,
      },
      size: {
        value: { min: 0.69, max: 1.69 },
      },
    },
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
            opacity: 0.69,
          },
        },
      },
    },
  };

  if (init) {
    return (
      <Particles id="tsparticles" options={options} className={className} />
    );
  }

  return null;
};

export default ParticleLinks;
