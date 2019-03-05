import {Actor, Sprite} from 'wglt';

import {Game} from '../game';

import {StatsActor} from './statsactor';

const PLAYER_SPRITE = new Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);

export class Player extends StatsActor {
  xp: number;
  maxXp: number;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Player', PLAYER_SPRITE);
    this.level = 1;
    this.xp = 0;
    this.maxXp = 100;
  }

  onDeath() {
    this.game.log('You died!');
  }

  addXp(xpGain: number) {
    this.xp += xpGain;

    while (this.xp >= this.maxXp) {
      this.level++;
      this.xp = 0;
      this.maxXp *= 2;
      this.game.log('You reached level ' + this.level, 0xFF8000FF);
    }
  }
}
