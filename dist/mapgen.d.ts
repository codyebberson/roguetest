import { Game } from './game';
import { Dungeon } from './dungeon';
export declare class MapGenerator {
    readonly game: Game;
    constructor(game: Game);
    createMap(): void;
    createOverworld(): void;
    createDungeon(dungeon: Dungeon): void;
    private clearMap;
    private createRoom;
    private createHTunnel;
    private createVTunnel;
    private placeMonsters;
    private placeItems;
    private placeObstacles;
}
