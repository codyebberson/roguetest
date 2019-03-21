import { Talent } from 'wglt';
import { Game } from '../game';
import { Monster } from './monster';
export declare class Griffon extends Monster {
    constructor(game: Game, x: number, y: number, level: number);
    readonly leapTalent: Talent;
    takeDamage(damage: number): void;
}
