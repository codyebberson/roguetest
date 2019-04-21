import { Rect } from "wglt";
import { Portal } from "../items/portal";
import { MapGenerator } from "./mapgen";
export declare class DungeonLayer {
    private readonly mapGen;
    readonly rect: Rect;
    readonly level: number;
    readonly rooms: Rect[];
    entrance?: Portal;
    exit?: Portal;
    constructor(mapGen: MapGenerator, rect: Rect, level: number);
    private createRoom;
    private createHTunnel;
    private createVTunnel;
    private placeMonsters;
    private placeItems;
    private placeObstacles;
}
