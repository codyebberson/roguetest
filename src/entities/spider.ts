import {Sprite} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';

const SPRITE = new Sprite(64, 144, 16, 24, 2, true, undefined, 0x20e64fFF);

export class Spider extends Monster {
  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Spider', SPRITE);
    this.level = level;
    this.strength = 10 + 2 * level;
    this.maxHp = 10 + 2 * level;
    this.hp = this.maxHp;
  }
}