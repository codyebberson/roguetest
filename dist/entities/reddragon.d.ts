import { Rect } from 'wglt';
import { Game } from '../game';
import { Monster } from './monster';
export declare class RedDragon extends Monster {
    readonly room: Rect;
    aggro: boolean;
    cooldown: number;
    constructor(game: Game, x: number, y: number, room: Rect);
    takeDamage(damage: number): void;
}
