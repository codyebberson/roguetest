import { Effect, Game, Sprite, Vec2 } from 'wglt';
export declare class ExplosionEffect extends Effect {
    readonly game: Game;
    readonly center: Vec2;
    readonly radius: number;
    readonly sprites: Sprite[];
    constructor(game: Game, center: Vec2, radius: number, duration: number);
    update(): void;
}
