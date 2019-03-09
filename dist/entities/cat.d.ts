import { Vec2 } from 'wglt';
import { Game } from '../game';
import { Monster } from './monster';
export declare class Cat extends Monster {
    destination?: Vec2;
    constructor(game: Game, x: number, y: number);
}
