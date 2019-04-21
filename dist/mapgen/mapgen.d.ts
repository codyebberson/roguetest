import { Rect, TileMap } from 'wglt';
import { Game } from '../game';
export declare class MapGenerator {
    readonly game: Game;
    nextKeyId: number;
    constructor(game: Game);
    createMap(): void;
    clearMap(map: TileMap, rect: Rect, tile: number, blocked: boolean, blockedSight: boolean): void;
    createRiver(map: TileMap, bounds: Rect, length: number): void;
    private touchUp;
}
