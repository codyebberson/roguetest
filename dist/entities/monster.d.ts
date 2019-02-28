import { Actor, Entity, Game, Sprite } from 'wglt';
export declare abstract class Monster extends Actor {
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
    onAttack(attacker: Entity, damage: number): void;
    onDeath(): void;
}
