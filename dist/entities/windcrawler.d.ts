import { Game } from '../game';
import { Monster } from './monster';
export declare class WindCrawler extends Monster {
    readonly dx: number;
    readonly dy: number;
    constructor(game: Game, x: number, y: number, dx: number, dy: number, level: number);
}
