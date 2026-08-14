import { Application, type Renderer } from "pixi.js";
import { useEffect, useRef } from "react";


function Board(){

    const containerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<Application | null>(null);

    useEffect(() => {
        let destroyed = false;
        const app = new Application<Renderer>();

        (async () => {
            await app.init({
                background: "#1099bb",
                resizeTo: containerRef.current ?? undefined,
            });
            if(destroyed){
                app.destroy(true);
                return;
            }

            appRef.current = app;
            containerRef.current?.appendChild(app.view);

            //Hier Board-Grid, Listener etc. einfügen
        })();

        return () => {
            destroyed = true;
            appRef.current?.destroy(true, { children: true, texture: true });
            appRef.current = null;
        };


    }, []);

    return(
        <div ref={containerRef} style={{ width: "600px", height: "600px" }} />
    )
}

export default Board;