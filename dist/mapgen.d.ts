import { Rect, TileMap } from 'wglt';
import { Game } from './game';
import { Dungeon } from './dungeon';
export declare class MapGenerator {
    readonly game: Game;
    nextKeyId: number;
    constructor(game: Game);
    createMap(): void;
    createOverworld(): void;
    createCastle(map: TileMap): Rect;
    createDungeon(dungeon: Dungeon): void;
    private clearMap;
    private createRoom;
    private createHTunnel;
    private createVTunnel;
    private placeMonsters;
    private placeItems;
    private placeObstacles;
    private createRiver;
    private touchUp;
}
