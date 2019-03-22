import { Rect } from 'wglt';
import { Game } from '../game';
import { Monster } from './monster';
import { Key } from '../items/key';
export declare class RedDragon extends Monster {
    readonly room: Rect;
    cooldown: number;
    constructor(game: Game, x: number, y: number, level: number, room: Rect);
    takeDamage(damage: number): void;
    getLoot(): Key[];
}
