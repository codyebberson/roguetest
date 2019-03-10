import {Colors, Sprite} from 'wglt';

import {CharacterClass} from '../classes/characterclass';
import {Paladin} from '../classes/paladin';
import {Game} from '../game';
import {CharacterRace} from '../races/characterrace';
import {Human} from '../races/human';

import {StatsActor} from './statsactor';

const PLAYER_SPRITE = new Sprite(0, 96, 16, 24, 2, true, undefined, 0xffcf5cff);

export class Player extends StatsActor {
  xp: number;
  maxXp: number;
  race: CharacterRace;
  class: CharacterClass;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Player', PLAYER_SPRITE);
    this.level = 1;
    this.xp = 0;
    this.maxXp = 100;
    this.race = new Human();
    this.class = new Paladin();
  }

  onDeath() {
    this.game.log('You died!');
  }

  addXp(xpGain: number) {
    this.xp += xpGain;
    this.addFloatingText('+' + xpGain, Colors.LIGHT_MAGENTA);

    while (this.xp >= this.maxXp) {
      this.level++;
      this.xp = 0;
      this.maxXp *= 2;
      this.game.log('You reached level ' + this.level, Colors.LIGHT_MAGENTA);
    }
  }
}
