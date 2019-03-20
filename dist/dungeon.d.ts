import { Rect } from "wglt";
import { Portal } from "./items/portal";
export declare class Dungeon {
    readonly rect: Rect;
    readonly level: number;
    readonly rooms: Rect[];
    entrance?: Portal;
    exit?: Portal;
    constructor(rect: Rect, level: number);
}
