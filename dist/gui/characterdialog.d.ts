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
    readonly ring1Slot: ButtonSlot;
    readonly ring2Slot: ButtonSlot;
    readonly mainHandSlot: ButtonSlot;
    readonly offHandSlot: ButtonSlot;
    drawContents(): void;
}
