import { Game, Talent } from 'wglt';
import { Monster } from './monster';
export declare class Griffon extends Monster {
    readonly leapTalent: Talent;
    constructor(game: Game, x: number, y: number);
}
