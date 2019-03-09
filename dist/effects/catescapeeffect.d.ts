import { Effect, TileMapCell } from 'wglt';
import { Cat } from '../entities/cat';
import { Game } from '../game';
export declare class CatEscapeEffect extends Effect {
    game: Game;
    cat: Cat;
    path?: TileMapCell[];
    pathIndex: number;
    constructor(game: Game);
    update(): void;
    endEffect(): void;
}
