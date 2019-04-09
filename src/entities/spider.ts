import {Sprite, Serializable} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';

const SPRITE = new Sprite(64, 144, 16, 24, 2, true, undefined, 0x20e64fFF);

@Serializable('Spider')
export class Spider extends Monster {
  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Spider', SPRITE, level);
  }
}
