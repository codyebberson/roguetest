import { Actor, Game, Item } from 'wglt';
export declare class Gold extends Item {
    constructor(game: Game, x?: number, y?: number);
    onPickup(entity: Actor): void;
}
