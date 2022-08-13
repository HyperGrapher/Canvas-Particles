import "./style.css";

const container = document.querySelector<HTMLDivElement>("#app");

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
container?.appendChild(canvas);

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

const cx = canvas.getContext("2d");

const mouse = <{ x: number | null; y: number | null }>{
	x: null,
	y: null,
};

window.addEventListener("click", (e: MouseEvent) => {
	mouse.x = e.x;
	mouse.y = e.y;
	drawCircle();
});

const drawCircle = () => {
	if (!mouse.x || !mouse.y || !cx) return;
	cx.fillStyle = "orangered";
	cx.beginPath();
	cx.arc(mouse.x, mouse.y, 12, 0, Math.PI * 2);
	cx.fill();
};
