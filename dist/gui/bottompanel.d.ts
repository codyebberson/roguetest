import { ButtonSlot, Panel, ShortcutBar } from 'wglt';
export declare class BottomPanel extends Panel {
    constructor();
    readonly shortcutBar: ShortcutBar;
    readonly inventorySlot: ButtonSlot;
    drawContents(): void;
}
