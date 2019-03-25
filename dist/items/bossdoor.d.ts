import { Game } from 'wglt';
import { Monster } from '../entities/monster';
import { Player } from '../entities/player';
import { Door } from './door';
export declare class BossDoor extends Door {
    readonly boss: Monster;
    constructor(game: Game, x: number, y: number, boss: Monster);
    onBump(player: Player): boolean;
}
