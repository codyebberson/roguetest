import { Dialog } from 'wglt';
import { Game } from '../game';
import { StatsActor } from './statsactor';
import { Player } from './player';
export declare class King extends StatsActor {
    dialog?: Dialog;
    constructor(game: Game, x: number, y: number);
    onBump(player: Player): boolean;
    takeDamage(attacker: StatsActor, damage: number): void;
}
