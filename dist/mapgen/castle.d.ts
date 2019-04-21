import { MapGenerator } from "./mapgen";
import { Vec2, Rect } from "wglt";
export declare class Castle {
    rect: Rect;
    center: Vec2;
    constructor(mapGen: MapGenerator, castle: Rect);
}
