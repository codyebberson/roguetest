import { Sprite } from 'wglt';

import { Game } from '../game';

import { Monster } from './monster';

const SPRITE = new Sprite(64, 288, 16, 24, 2, true, undefined, 0xE0E0E0A0);

export class Ghost extends Monster {
  constructor(game: Game, x: number, y: number, level: number) {
    super(game, x, y, 'Ghost', SPRITE, level);
  }
}
