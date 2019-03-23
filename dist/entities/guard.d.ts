import { Vec2 } from 'wglt';
import { Game } from '../game';
import { Monster } from './monster';
export declare class Guard extends Monster {
    constructor(game: Game, x: number, y: number, waypoints: Vec2[]);
}
