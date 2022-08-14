import { IPosition } from "./main";

export class Particle {
	constructor(
		pos: IPosition,
		public context: CanvasRenderingContext2D,
		public x = pos.x!,
		public y = pos.y!,
		public size = Math.random() * 5 + 1,
		public velocityX = Math.random() * 3 - 1.5,
		public velocityY = Math.random() * 3 - 1.5
        
	) {}

	update() {
		this.x += this.velocityX;
		this.y += this.velocityY;
	}

	draw() {
		this.context.fillStyle = "orangered";
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.context.fill();
	}
}
