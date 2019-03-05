import { ButtonSlot, Panel, ShortcutButtonBar } from 'wglt';
export declare class BottomPanel extends Panel {
    constructor();
    readonly shortcutBar: ShortcutButtonBar;
    readonly inventorySlot: ButtonSlot;
    drawContents(): void;
}
