import { Ability, Actor } from 'wglt';
import { Game } from '../game';
import { BaseItem } from './baseitem';
export declare class Scroll extends BaseItem {
    readonly ability: Ability;
    constructor(game: Game, x: number, y: number, ability: Ability);
    onUse(user: Actor): boolean;
    onUpdateTooltip(): void;
}
