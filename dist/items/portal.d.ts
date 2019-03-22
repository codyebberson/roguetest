import { Item, Sprite } from 'wglt';
import { Player } from '../entities/player';
import { Game } from '../game';
export declare class Portal extends Item {
    other?: Portal;
    fade: boolean;
    constructor(game: Game, x: number, y: number, name: string, sprite: Sprite);
    onBump(_: Player): void;
}
