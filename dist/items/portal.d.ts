import { Game, Item, Sprite } from 'wglt';
export declare class Portal extends Item {
    other?: Portal;
    fade: boolean;
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
}
