import { Vec2 } from 'wglt';
import { Game } from '../game';
import { Monster } from './monster';
export declare class Guard extends Monster {
    aggro: boolean;
    constructor(game: Game, x: number, y: number, waypoints: Vec2[]);
    takeDamage(damage: number): void;
}
