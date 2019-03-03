import { Actor, Game } from 'wglt';
export declare class Player extends Actor {
    level: number;
    xp: number;
    maxXp: number;
    constructor(game: Game, x: number, y: number);
    onAttack(target: Actor, damage: number): void;
    onDeath(): void;
}
