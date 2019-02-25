import { Panel } from "wglt";
import { Player } from "../entities/player";
export declare class TopPanel extends Panel {
    readonly player: Player;
    constructor(player: Player);
    drawContents(): void;
}
