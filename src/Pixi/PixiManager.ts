import { Application, type Renderer } from "pixi.js";

class PixiManager {
  private app: Application<Renderer> | null = null;

  public setApp(app: Application<Renderer>) {
    this.app = app;
  }

  public getApp(): Application<Renderer> {
    if (!this.app) {
      throw new Error("Pixi Application wurde noch nicht initialisiert.");
    }

    return this.app;
  }

  public getStage() {
    return this.getApp().stage;
  }

  public destroy() {
    this.app?.destroy(true, {
      children: true,
      texture: true,
    });

    this.app = null;
  }
}

export const pixiManager = new PixiManager();
