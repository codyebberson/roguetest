import { Actor, Sprite } from 'wglt';
import { Game } from '../game';
import { Buff } from '../buffs/buff';
export declare class StatsActor extends Actor {
    level: number;
    mp: number;
    maxMp: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    readonly buffs: Buff[];
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
    onAttack(target: Actor, damage: number): void;
    startTurn(): void;
}
