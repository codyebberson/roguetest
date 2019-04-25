import { Animation, Game, Sprite, Vec2 } from "wglt";
export declare class GuiSlideAnimation extends Animation {
    readonly sprite: Sprite;
    readonly start: Vec2;
    readonly end: Vec2;
    readonly duration: number;
    constructor(sprite: Sprite, start: Vec2, end: Vec2, duration: number);
    draw(game: Game): void;
}
