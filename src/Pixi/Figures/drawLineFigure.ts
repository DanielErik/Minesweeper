import { pixiManager } from "../PixiManager";
import { Graphics } from "pixi.js";

function drawLineFigure(x1: number, y1: number, x2: number, y2: number): void {
  const graphics = new Graphics();
  graphics.moveTo(x1, y1);
  graphics.lineTo(x2, y2);
  graphics.stroke({ color: 0xff0000, pixelLine: true });
  pixiManager.getStage().addChild(graphics);
}

export default drawLineFigure;
