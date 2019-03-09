import * as wglt from 'wglt';
import { AppState } from 'wglt';
import { CharacterClass } from './classes/characterclass';
import { ClassMenu } from './classmenu';
import { Game } from './game';
import { MainMenu } from './mainmenu';
import { RaceMenu } from './racemenu';
import { CharacterRace } from './races/characterrace';
export declare class App extends wglt.App {
    readonly mainMenu: MainMenu;
    readonly raceMenu: RaceMenu;
    readonly classMenu: ClassMenu;
    readonly highScores: AppState;
    readonly credits: AppState;
    game: Game;
    playerRace?: CharacterRace;
    playerClass?: CharacterClass;
    constructor();
    showMainMenu(): void;
    chooseRace(): void;
    chooseClass(): void;
    startGame(): void;
    showHighScores(): void;
    showCredits(): void;
}
