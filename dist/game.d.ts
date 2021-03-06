import * as wglt from 'wglt';
import { App, ItemContainerDialog, TalentsDialog, Vec2 } from 'wglt';
import { Cat } from './entities/cat';
import { CharacterDialog } from './gui/characterdialog';
import { LevelUpDialog } from './gui/levelupdialog';
export declare class Game extends wglt.Game {
    private readonly mapGen;
    cat?: Cat;
    inventoryDialog: ItemContainerDialog;
    talentsDialog: TalentsDialog;
    characterDialog: CharacterDialog;
    levelUpDialog: LevelUpDialog;
    constructor(app: App, seed: number);
    hideAllDialogs(): void;
    warpToPoint(point: Vec2): void;
    findFreeTile(x0: number, y0: number, maxDistance: number): wglt.Vec2 | undefined;
    save(): void;
}
