import * as wglt from 'wglt';
import { App, Vec2 } from 'wglt';
import { Cat } from './entities/cat';
import { LevelUpDialog } from './gui/levelupdialog';
export declare class Game extends wglt.Game {
    private readonly mapGen;
    cat?: Cat;
    levelUpDialog: LevelUpDialog;
    constructor(app: App);
    warpToPoint(point: Vec2): void;
}
