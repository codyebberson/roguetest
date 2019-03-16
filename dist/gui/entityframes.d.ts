import { Panel } from "wglt";
import { Game } from "../game";
export declare class EntityFrames extends Panel {
    readonly game: Game;
    constructor(game: Game);
    drawContents(): void;
}
