import { IPosition } from "./main";

export class Particle {
	constructor(
		pos: IPosition,
		public context: CanvasRenderingContext2D,
		public hue: number,
		public x = pos.x!,
		public y = pos.y!,
		public size = Math.random() * 5 + 1,
		public velocityX = (Math.random() * 3 - 1.5) * 2,
		public velocityY = (Math.random() * 3 - 1.5) * 2,
		public color =`hsla(${hue}, 100%, 50%, 100%)`,
	) {}

	update() {
		this.x += this.velocityX;
		this.y += this.velocityY;
		if (this.size > 0.2) this.size -= 0.1;
	}

	draw() {
		this.context.fillStyle = "orangered";
		// this.hue can be used belowS
        this.context.fillStyle = `hsla(${18}, 100%, 50%, 100%)`;
        // this.context.globalAlpha = 0.5
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		this.context.fill();
	}
}
