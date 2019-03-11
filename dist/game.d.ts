import * as wglt from 'wglt';
import { App } from 'wglt';
import { Cat } from './entities/cat';
import { LevelUpDialog } from './gui/levelupdialog';
export declare class Game extends wglt.Game {
    private readonly mapGen;
    cat?: Cat;
    levelUpDialog: LevelUpDialog;
    constructor(app: App);
    endLevel(): void;
    nextLevel(): void;
}
