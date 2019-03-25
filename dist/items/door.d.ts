import { Game, Item } from 'wglt';
export declare abstract class Door extends Item {
    constructor(game: Game, x: number, y: number);
    openDoor(): void;
}
