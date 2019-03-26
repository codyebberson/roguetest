import { Actor, Game, Item } from 'wglt';
export declare class HealthPotion extends Item {
    constructor(game: Game, x?: number, y?: number);
    onPickup(entity: Actor): void;
    onUse(user: Actor): boolean;
}
