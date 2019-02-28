import { Actor, Game } from 'wglt';
export declare class Player extends Actor {
    level: number;
    xp: number;
    maxXp: number;
    constructor(game: Game, x: number, y: number);
    onAttack(attacker: Actor, damage: number): void;
    onDeath(): void;
}
