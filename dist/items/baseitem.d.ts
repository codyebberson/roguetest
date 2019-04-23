import { Item, Message, Game, Sprite } from "wglt";
import { ItemQuality } from "./itemquality";
export declare abstract class BaseItem extends Item {
    readonly quality: ItemQuality;
    readonly itemLevel: number;
    readonly maxStack: number;
    readonly sellPrice: number;
    constructor(game: Game, name: string, sprite: Sprite, quality: ItemQuality, itemLevel: number, maxStack: number, sellPrice: number);
    getColor(quality: ItemQuality): 2644352511 | 4294967295 | 520028415 | 7396863 | 2738220799 | 4286578943;
    onUpdateTooltip(): void;
    addTooltipDescription(tooltipMessages: Message[]): void;
}
