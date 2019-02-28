import { Ability, Actor, Game, Item } from 'wglt';
export declare class Scroll extends Item {
    readonly ability: Ability;
    constructor(game: Game, x: number, y: number, ability: Ability);
    onPickup(entity: Actor): void;
    onUse(user: Actor): boolean;
}
