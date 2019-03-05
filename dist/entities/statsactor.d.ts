import { Actor, Sprite } from 'wglt';
import { Game } from '../game';
export declare class StatsActor extends Actor {
    level: number;
    mp: number;
    maxMp: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
    onAttack(target: Actor, damage: number): void;
}
