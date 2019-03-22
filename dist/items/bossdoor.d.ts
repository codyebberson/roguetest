import { Game, Item } from 'wglt';
import { Monster } from '../entities/monster';
import { Player } from '../entities/player';
export declare class BossDoor extends Item {
    readonly boss: Monster;
    constructor(game: Game, x: number, y: number, boss: Monster);
    onBump(player: Player): void;
}
