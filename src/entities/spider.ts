import {Game, Sprite} from 'wglt';

import {Monster} from './monster';

const SPRITE_WIDTH = 16;
const SPRITE_HEIGHT = 24;
const SPRITE = new Sprite(64, 144, SPRITE_WIDTH, SPRITE_HEIGHT, 2, true, undefined, 0x20e64fFF);

export class Spider extends Monster {
  constructor(game: Game, x: number, y: number) {
    super(game, x, y, 'Spider', SPRITE);
  }
}