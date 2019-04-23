import { Rect } from "wglt";
import { MapGenerator } from "./mapgen";
export declare class Overworld {
    readonly rect: Rect;
    constructor(mapGen: MapGenerator);
    private createVendor;
}
