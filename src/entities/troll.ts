import {Sprite, Serializable} from 'wglt';

import {Game} from '../game';

import {Monster} from './monster';

const SPRITE = new Sprite(64, 216, 16, 24, 2, true, undefined, 0x20e64fFF);

@Serializable('Troll')
export class Troll extends Monster {
  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Troll', SPRITE, level);
  }
}
