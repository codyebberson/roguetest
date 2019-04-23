import { Dialog, Message, ArrayList, Item, Rect, Actor } from "wglt";
export declare class VendorDialog extends Dialog {
    readonly vendor: Actor;
    readonly items: ArrayList<Item>;
    readonly messages: Message[];
    constructor(rect: Rect, vendor: Actor);
    private addItem;
    private removeItem;
    private getExistingButton;
    private getNextFreeSlot;
    drawContents(): void;
}
