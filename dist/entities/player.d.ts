import { Game } from '../game';
import { StatsActor } from './statsactor';
export declare class Player extends StatsActor {
    xp: number;
    maxXp: number;
    constructor(game: Game, x: number, y: number);
    onDeath(): void;
    addXp(xpGain: number): void;
}
