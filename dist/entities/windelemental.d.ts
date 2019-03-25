import { Talent } from 'wglt';
import { Game } from '../game';
import { Monster } from './monster';
export declare class WindElemental extends Monster {
    constructor(game: Game, x: number, y: number, level: number);
    readonly leapTalent: Talent;
}
