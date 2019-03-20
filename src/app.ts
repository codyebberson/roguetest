
import * as wglt from 'wglt';
import {AppState, Rect, FadeInAnimation} from 'wglt';

import {CharacterClass} from './classes/characterclass';
import {ClassMenu} from './classmenu';
import {Player} from './entities/player';
import {Game} from './game';
import {MainMenu} from './mainmenu';
import {RaceMenu} from './racemenu';
import {CharacterRace} from './races/characterrace';

export class App extends wglt.App {
  readonly mainMenu: MainMenu;
  readonly raceMenu: RaceMenu;
  readonly classMenu: ClassMenu;
  readonly highScores: AppState;
  readonly credits: AppState;
  game: Game;
  playerRace?: CharacterRace;
  playerClass?: CharacterClass;

  constructor() {
    super({
      canvas: document.querySelector('canvas') as HTMLCanvasElement,
      imageUrl: 'graphics.png',
      size: new Rect(0, 0, 224, 400),
      fillWindow: true
    });

    this.mainMenu = new MainMenu(this);
    this.raceMenu = new RaceMenu(this);
    this.classMenu = new ClassMenu(this);
    this.highScores = new AppState(this);
    this.credits = new AppState(this);
    this.game = new Game(this);
    this.showMainMenu();
  }

  showMainMenu() {
    this.state = this.mainMenu;
  }

  chooseRace() {
    this.state = this.raceMenu;
  }

  chooseClass() {
    this.state = this.classMenu;
  }

  startGame() {
    this.state = this.game;

    if (this.playerRace) {
      this.playerRace.initPlayer(this.game.player as Player);
    }

    if (this.playerClass) {
      this.playerClass.initPlayer(this.game.player as Player);
    }

    this.game.addAnimation(new FadeInAnimation(30));
  }

  showHighScores() {
    this.state = this.highScores;
  }

  showCredits() {
    this.state = this.credits;
  }
}