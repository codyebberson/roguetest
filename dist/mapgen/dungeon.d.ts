import { MapGenerator } from "./mapgen";
import { DungeonLayer } from "./dungeonlayer";
export declare class Dungeon {
    readonly layers: DungeonLayer[];
    constructor(mapGen: MapGenerator, x: number, y: number);
}
