import { ButtonSlot, Dialog, Rect } from 'wglt';
import { Player } from '../entities/player';
export declare class CharacterDialog extends Dialog {
    readonly player: Player;
    constructor(rect: Rect, player: Player);
    readonly headSlot: ButtonSlot;
    readonly neckSlot: ButtonSlot;
    readonly backSlot: ButtonSlot;
    readonly chestSlot: ButtonSlot;
    readonly handsSlot: ButtonSlot;
    readonly legsSlot: ButtonSlot;
    readonly feetSlot: ButtonSlot;
    readonly ringSlot: ButtonSlot;
    readonly mainHandSlot: ButtonSlot;
    readonly offHandSlot: ButtonSlot;
    private addItem;
    private removeItem;
    private getSlot;
    drawContents(): void;
}
