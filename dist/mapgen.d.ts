import { Game, RNG } from 'wglt';
export declare class MapGenerator {
    readonly game: Game;
    readonly rng: RNG;
    constructor(game: Game);
    createMap(): void;
    private createRoom;
    private createHTunnel;
    private createVTunnel;
    private placeObjects;
}
