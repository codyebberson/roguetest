import { Actor } from 'wglt';
export declare class Player extends Actor {
    level: number;
    xp: number;
    maxXp: number;
    onAttack(attacker: Actor, damage: number): void;
    onDeath(): void;
}
