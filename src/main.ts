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
let hue = 0;

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

const cx = canvas.getContext("2d");

const mouse = <IPosition>{
	x: Math.random() * canvas.width,
	y: Math.random() * canvas.height,
};

canvas.addEventListener("click", (event: MouseEvent) => {
	mouse.x = event.x;
	mouse.y = event.y;

	for (let i = 0; i < 50; i++) {
		particles.push(new Particle(mouse, cx!, hue));
	}
});

canvas.addEventListener("mousemove", (event: MouseEvent) => {
	mouse.x = event.x;
	mouse.y = event.y;

	for (let i = 0; i < 2; i++) {
		particles.push(new Particle(mouse, cx!, hue));
	}
});

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
	// cx?.clearRect(0, 0, canvas.width, canvas.height);
	cx!.fillStyle = "rgba(0, 0, 0, 0.15)";
	cx?.fillRect(0, 0, canvas.width, canvas.height)
	drawParticles();
	hue++
	requestAnimationFrame(animate);
};

animate();
