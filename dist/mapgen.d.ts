import { Game } from './game';
export declare class MapGenerator {
    readonly game: Game;
    constructor(game: Game);
    createMap(): void;
    private createRoom;
    private createHTunnel;
    private createVTunnel;
    private placeMonsters;
    private placeItems;
    private placeObstacles;
}
