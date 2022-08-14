import { Particle } from "./particle";
import "./style.css";

export interface IPosition {
	x: number | null;
	y: number | null;
}

const container = document.querySelector<HTMLDivElement>("#app");

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
container?.appendChild(canvas);
const particles: Array<Particle> = [];

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

const cx = canvas.getContext("2d");

const initPosition = () => {
	const mouse = <IPosition>{
		x: Math.random() * canvas.width,
		y: Math.random() * canvas.height,
	};

	return mouse;
};

const createParticleArray = () => {
	for (let i = 0; i < 100; i++) {
		const m = initPosition();
		particles.push(new Particle(m, cx!));
	}
};

createParticleArray();

const drawParticles = () => {
	for (let i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].draw();
		// remove small particles
		if (particles[i].size <= 0.3) {
			particles.splice(i, 1);
			i--;
		}
	}
};

const animate = () => {
	cx?.clearRect(0, 0, canvas.width, canvas.height);
	drawParticles();
	requestAnimationFrame(animate);
};

animate();
