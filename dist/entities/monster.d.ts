import { Sprite } from 'wglt';
import { Game } from '../game';
import { StatsActor } from './statsactor';
export declare abstract class Monster extends StatsActor {
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite, level: number);
    private calculateDamage;
    private buildLoot;
}
