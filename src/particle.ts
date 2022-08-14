import { IPosition } from "./main";

export class Particle {
	constructor(
		pos: IPosition,
		public context: CanvasRenderingContext2D,
		public x = pos.x!,
		public y = pos.y!,
		public size = Math.random() * 15 + 1,
		public velocityX = Math.random() * 5 - 2.5,
		public velocityY = Math.random() * 5 - 2.5
	) {}

	update() {
		this.x += this.velocityX;
		this.y += this.velocityY;
		if (this.size > 0.2) this.size -= 0.1;
	}

	draw() {
		this.context.fillStyle = "orangered";
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.context.fill();
	}
}
