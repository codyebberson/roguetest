import { Animation, TileMapCell } from 'wglt';
import { Cat } from '../entities/cat';
import { Game } from '../game';
export declare class CatEscapeAnimation extends Animation {
    game: Game;
    cat: Cat;
    path?: TileMapCell[];
    pathIndex: number;
    constructor(game: Game);
    update(): void;
    endAnimation(): void;
}
