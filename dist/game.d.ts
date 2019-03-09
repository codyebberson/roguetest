import * as wglt from 'wglt';
import { App } from 'wglt';
import { Cat } from './entities/cat';
export declare class Game extends wglt.Game {
    private readonly mapGen;
    cat?: Cat;
    constructor(app: App);
    endLevel(): void;
    nextLevel(): void;
}
