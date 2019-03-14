import { Animation, Game, Sprite, Vec2 } from 'wglt';
export declare class ExplosionAnimation extends Animation {
    readonly game: Game;
    readonly center: Vec2;
    readonly radius: number;
    readonly duration: number;
    readonly sprites: Sprite[];
    constructor(game: Game, center: Vec2, radius: number, duration: number);
    update(): void;
}
