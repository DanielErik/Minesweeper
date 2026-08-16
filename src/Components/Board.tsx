import { Application, type Renderer } from "pixi.js";
import { useEffect, useRef } from "react";
import { pixiManager } from "../Pixi/PixiManager";

function Board() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    const app = new Application<Renderer>();

    (async () => {
      await app.init({
        background: "#1099bb",
        resizeTo: containerRef.current ?? undefined,
      });
      if (destroyed) {
        app.destroy(true);
        return;
      }

      pixiManager.setApp(app);
      containerRef.current?.appendChild(app.canvas);

      //Hier Board-Grid, Listener etc. einfügen
    })();

    return () => {
      destroyed = true;
      pixiManager.destroy();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "600px", height: "600px" }} />;
}

export default Board;
