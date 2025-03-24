import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
	type Container,
	type ISourceOptions,
	MoveDirection,
	OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = () => {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: "#000000",
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 1,
					},
					repulse: {
						distance: 100,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: false,
					speed: 3,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 150,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[],
	);

	if (init) {
		return (
			<div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			</div>
		);
	}

	return <></>;
};

export default ParticlesBg;