import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function Particle() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // Corrected import
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true },
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: false,
                        opacity: 0.03,
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.3,
                        },
                    },
                    size: {
                        value: 1,
                        random: true,
                    },
                    move: {
                        enable: true,
                        speed: 0.3,
                        direction: "right",
                        outModes: "out",
                    },
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                        particles_nb: 1,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default Particle;
