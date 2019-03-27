import { Ability, Actor, Item } from 'wglt';
import { Game } from '../game';
export declare class Scroll extends Item {
    readonly ability: Ability;
    constructor(game: Game, x: number, y: number, ability: Ability);
    onPickup(entity: Actor): void;
    onUse(user: Actor): boolean;
}
