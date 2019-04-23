import { Button, ArrayList, Item, Rect, Actor } from "wglt";
import { TooltipDialog } from "wglt/dist/gui/tooltipdialog";
export declare class VendorButton extends Button {
    readonly vendor: Actor;
    readonly stackItems: ArrayList<Item>;
    constructor(rect: Rect, vendor: Actor, initialItem: Item);
    getFirstItem(): Item | undefined;
    click(): void;
    drawContents(): void;
    updateTooltip(tooltip: TooltipDialog): void;
}
