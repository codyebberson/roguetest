import { Item } from 'wglt';
import { Player } from '../entities/player';
import { Game } from '../game';
export declare class Hearthstone extends Item {
    constructor(game: Game, x?: number, y?: number);
    onUse(player: Player): boolean;
}
