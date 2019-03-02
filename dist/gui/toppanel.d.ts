import { ButtonSlot, Panel } from 'wglt';
import { Player } from '../entities/player';
export declare class TopPanel extends Panel {
    readonly player: Player;
    constructor(player: Player);
    readonly characterSlot: ButtonSlot;
    readonly talentsSlot: ButtonSlot;
    readonly inspectSlot: ButtonSlot;
    readonly menuSlot: ButtonSlot;
    drawContents(): void;
}
